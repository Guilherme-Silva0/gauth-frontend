const Title = ({ children, additionalClass }) => {
  return (
    <h1
      className={`text-2xl mb-3 font-bold text-fist ${additionalClass} dark:text-gray-200`}
    >
      {children}
    </h1>
  );
};

export default Title;
