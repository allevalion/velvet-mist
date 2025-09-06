const Button = ({ children, variant, style, onClick }) => {
  const variants = {
    badge:
      'flex-center gap-2 text-base font-medium text-black bg-white hover:bg-[#e7d393] active:bg-[#d6c27f] rounded-full',
  };

  const variantClass =
    variant && Object.prototype.hasOwnProperty.call(variants, variant)
      ? variants[variant]
      : '';

  return (
    <button
      className={`${variantClass} ${
        style ? style : ''
      } cursor-pointer transition-all duration-500`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Button;
