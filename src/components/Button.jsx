const Button = ({ children, type, disabled }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className="bg-fist text-white font-semibold py-2 w-full rounded-lg shadow-md cursor-pointer transition-all dark:bg-third dark:text-fist hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 dark:disabled:bg-slate-600 disabled:bg-slate-600 disabled:opacity-50 disabled:cursor-default"
    >
      {children}
    </button>
  );
};

export default Button;
