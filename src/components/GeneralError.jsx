const GeneralError = ({ children }) => {
  return (
    <div className="w-full px-5 py-3 bg-red-600 rounded-xl shadow-md transition-all">
      <p className="w-full break-words text-center font-bold text-gray-100">
        {children}
      </p>
    </div>
  );
};

export default GeneralError;
