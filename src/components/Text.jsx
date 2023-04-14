const Text = ({ children, additionalClass }) => {
  return (
    <p className={`text-fist ${additionalClass} dark:text-gray-100`}>
      {children}
    </p>
  );
};

export default Text;
