import { useEffect, useRef } from 'react';
import { Renderer, Program, Mesh, Triangle, Color } from 'ogl';

const vertexShader = `
attribute vec2 position;
attribute vec2 uv;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const fragmentShader = `
precision highp float;

uniform float iTime;
uniform vec3 iResolution;
uniform vec3 uColor;
uniform vec3 uGlowColor;
uniform float uAmplitude;
uniform float uLineCount;

#define PI 3.1415926538

float spike(float tx, float center, float width, float height) {
    float delta = abs(tx - center);
    return max(0.0, height * (1.0 - delta / width));
}

// ECG waveform Y position at a given x phase
float ecgY(float tx, float amplitude) {
    float y = 0.0;
    // Flat baseline
    // P wave — gentle bump
    y += spike(tx, 0.18, 0.06, 0.08 * amplitude);
    // Q dip
    y -= spike(tx, 0.36, 0.025, 0.12 * amplitude);
    // R peak — the sharp dominant spike
    y += spike(tx, 0.40, 0.025, 0.55 * amplitude);
    // S dip
    y -= spike(tx, 0.44, 0.025, 0.12 * amplitude);
    // ST segment — slight elevation
    y += spike(tx, 0.56, 0.06, 0.03 * amplitude);
    // T wave — smooth dome
    y += spike(tx, 0.70, 0.09, 0.14 * amplitude);
    return y;
}

// Draw a single ECG line at a given vertical center
float ecgLine(vec2 uv, float vertCenter, float speed, float phaseOffset, float amplitude, float lineW, float glowW) {
    float wave_speed = speed;
    float tx = mod(uv.x - iTime * wave_speed + phaseOffset, 1.0);

    float y_comp = vertCenter + ecgY(tx, amplitude);

    // Hard line
    float blur = 0.0015;
    float line = smoothstep(y_comp + lineW + blur, y_comp + lineW, uv.y)
               - smoothstep(y_comp - lineW, y_comp - lineW - blur, uv.y);

    // Glow halo (wider, softer)
    float glow = smoothstep(y_comp + glowW, y_comp, abs(uv.y - y_comp));

    return clamp(line + glow * 0.35, 0.0, 1.0);
}

void main() {
    vec2 uv = gl_FragCoord.xy / iResolution.xy;

    // Correct aspect so spikes look natural
    vec2 st = uv;

    float alpha = 0.0;
    vec3 col = vec3(0.0);

    // --- Primary ECG line (center, bright, full amplitude) ---
    float primary = ecgLine(st, 0.5, 0.55, 0.0, uAmplitude, 0.003, 0.025);
    col += uColor * primary;
    alpha += primary;

    // --- Secondary line (upper, dimmer, slightly different phase) ---
    float secondary = ecgLine(st, 0.72, 0.55, 0.22, uAmplitude * 0.45, 0.0018, 0.015);
    col += uGlowColor * secondary * 0.45;
    alpha += secondary * 0.45;

    // --- Tertiary line (lower, very dim, echoing) ---
    float tertiary = ecgLine(st, 0.28, 0.55, 0.55, uAmplitude * 0.3, 0.0015, 0.012);
    col += uGlowColor * tertiary * 0.25;
    alpha += tertiary * 0.25;

    // Vignette — fade edges so it feels framed
    float vignette = 1.0 - smoothstep(0.3, 1.0, length((uv - 0.5) * vec2(1.2, 1.8)));
    alpha *= vignette;
    col   *= vignette;

    // Fade in the left and right edges
    float edgeFade = smoothstep(0.0, 0.06, uv.x) * smoothstep(1.0, 0.94, uv.x);
    alpha *= edgeFade;
    col   *= edgeFade;

    gl_FragColor = vec4(col, clamp(alpha, 0.0, 1.0));
}
`;

/**
 * ECGBackground — Full-bleed WebGL ECG animation for hero sections.
 *
 * Props:
 *   color        [r,g,b] 0-1  — primary line color   default: teal
 *   glowColor    [r,g,b] 0-1  — secondary/glow color default: cyan
 *   amplitude    number        — spike height scale   default: 1
 *   className    string        — extra classes on wrapper
 */
const ECGBackground = ({
  color     = [0.18, 0.83, 0.74],   // #2DD4BF teal
  glowColor = [0.40, 0.91, 0.98],   // #67E8F9 cyan
  amplitude = 1,
  className = '',
  ...rest
}) => {
  const containerRef = useRef(null);
  const rafId        = useRef();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const renderer = new Renderer({ alpha: true, antialias: true });
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 0);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE);   // additive blend — glow stacks beautifully

    container.appendChild(gl.canvas);

    const geometry = new Triangle(gl);
    const program  = new Program(gl, {
      vertex:   vertexShader,
      fragment: fragmentShader,
      uniforms: {
        iTime:      { value: 0 },
        iResolution:{ value: new Color(container.clientWidth, container.clientHeight, 1) },
        uColor:     { value: new Color(...color) },
        uGlowColor: { value: new Color(...glowColor) },
        uAmplitude: { value: amplitude },
      },
    });

    const mesh = new Mesh(gl, { geometry, program });

    function resize() {
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h);
      program.uniforms.iResolution.value.set(w, h, w / h);
    }
    window.addEventListener('resize', resize);
    resize();

    let isVisible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    function update(t) {
      if (isVisible) {
        program.uniforms.iTime.value = t * 0.001;
        renderer.render({ scene: mesh });
      }
      rafId.current = requestAnimationFrame(update);
    }
    rafId.current = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(rafId.current);
      observer.disconnect();
      window.removeEventListener('resize', resize);
      if (container.contains(gl.canvas)) container.removeChild(gl.canvas);
      gl.getExtension('WEBGL_lose_context')?.loseContext();
    };
  }, [color, glowColor, amplitude]);

  return (
    <div
      ref={containerRef}
      className={`w-full h-full ${className}`}
      {...rest}
    />
  );
};

export default ECGBackground;


/* ─────────────────────────────────────────────────────────────────
   USAGE EXAMPLE — drop this into your Hero section:

   <section className="relative w-full min-h-screen bg-[#060F1E] overflow-hidden flex items-center">

     // ECG fills the whole hero as a background layer
     <div className="absolute inset-0 opacity-60 pointer-events-none">
       <ECGBackground amplitude={1.1} />
     </div>

     // Dark radial vignette so text is readable in the center
     <div
       className="absolute inset-0 pointer-events-none"
       style={{
         background: 'radial-gradient(ellipse 70% 60% at 50% 50%, transparent 20%, rgba(6,15,30,0.75) 100%)'
       }}
     />

     // Your hero content sits above
     <div className="relative z-10 text-center px-6 mx-auto max-w-4xl">
       ...headlines, buttons, etc...
     </div>

   </section>
───────────────────────────────────────────────────────────────── */