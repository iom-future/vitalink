import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

export function Counter({ value, decimals = 0, prefix = '', suffix = '', inView, duration = 2 }) {
  const spanRef = useRef(null);
  const countObj = useRef({ val: 0 });

  useEffect(() => {
    if (inView) {
      gsap.to(countObj.current, {
        val: value,
        duration: duration,
        ease: "power2.out",
        onUpdate: () => {
          if (spanRef.current) {
            spanRef.current.innerText = `${prefix}${countObj.current.val.toLocaleString(undefined, {
              minimumFractionDigits: decimals,
              maximumFractionDigits: decimals,
            })}${suffix}`;
          }
        },
      });
    } else {
      countObj.current.val = 0;
      if (spanRef.current) {
        spanRef.current.innerText = `${prefix}${(0).toLocaleString(undefined, {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        })}${suffix}`;
      }
    }
  }, [inView, value, decimals, prefix, suffix, duration]);

  return <span ref={spanRef}></span>;
}
