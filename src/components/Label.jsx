const Label = ({ children, htmlFor }) => {
  return (
    <label
      htmlFor={htmlFor}
      className="text-fist text-base cursor-pointer dark:text-gray-200"
    >
      {children}
    </label>
  );
};

export default Label;
