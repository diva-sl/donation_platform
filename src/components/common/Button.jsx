const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`
        px-6 py-3
        rounded-xl
        font-semibold
        transition
        bg-orange-500
        text-white
        hover:bg-orange-600
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
