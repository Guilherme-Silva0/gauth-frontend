const Input = ({ type, placeholder, id }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      id={id}
      className="w-full h-11 rounded-lg py-2 px-4 outline-none placeholder-gray-400 transition-all shadow-inside dark:shadow-lg dark:bg-second dark:text-gray-100 dark:border-none focus:ring-2 focus:ring-third focus:placeholder-third focus:border-none"
    />
  );
};

export default Input;
