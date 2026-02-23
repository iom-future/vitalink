const StarBorder = ({
  as: Component = 'div',
  className = '',
  color = '#0D9488',
  speed = '6s',
  thickness = 2,
  children,
  ...rest
}) => {
  return (
    <Component
      className={`relative block overflow-hidden rounded-[20px] ${className}`}
      style={{
        padding: `${thickness}px`,
        ...rest.style
      }}
      {...rest}
    >
      <div
        className="absolute w-[300%] h-full opacity-100 bottom-0 right-[-250%] rounded-full animate-star-movement-bottom z-0 blur-[2px]"
        style={{
          background: `radial-gradient(circle, ${color} 0%, transparent 50%)`,
          animationDuration: speed
        }}
      ></div>
      <div
        className="absolute w-[300%] h-full opacity-100 top-0 left-[-250%] rounded-full animate-star-movement-top z-0 blur-[2px]"
        style={{
          background: `radial-gradient(circle, ${color} 0%, transparent 50%)`,
          animationDuration: speed
        }}
      ></div>
      <div className="relative z-1 rounded-[20px] overflow-hidden">
        {children}
      </div>
    </Component>
  );
};

export default StarBorder;
