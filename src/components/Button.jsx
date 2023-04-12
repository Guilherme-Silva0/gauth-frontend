const Button = ({ children, type }) => {
  return (
    <button
      type={type}
      className="bg-fist text-white font-semibold py-3 px-9 rounded-lg shadow-md cursor-pointer transition-all dark:bg-third dark:text-fist hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 disabled:bg-slate-600 disabled:cursor-default"
    >
      {children}
    </button>
  );
};

export default Button;
