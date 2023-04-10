const Form = (props) => {
  return (
    <form className="bg-gray-50 px-4 py-6 rounded-xl flex flex-col gap-2 items-center shadow-xl transition-all dark:bg-fist max-[450px]:w-11/12">
      {props.children}
    </form>
  );
};

export default Form;
