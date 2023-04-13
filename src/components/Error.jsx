const Error = ({ children }) => {
  return (
    <p className="text-sm text-red-500 font-bold animate-pulse">{children}</p>
  );
};

export default Error;
