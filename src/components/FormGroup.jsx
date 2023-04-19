const FormGroup = ({ children, additionalClass }) => {
  return (
    <div
      className={`w-6/12 flex justify-around items-center bg-gray-50 px-4 py-6 rounded-2xl shadow-xl transition-all dark:bg-fist 2xl:w-5/12 max-md:flex-col max-lg:w-9/12 max-[600px]:w-11/12 max-[600px]:block ${additionalClass}`}
    >
      {children}
    </div>
  );
};

export default FormGroup;
