const Form = (props) => {
  return (
    <form className="flex m-auto flex-col gap-3 items-center max-[600px]:w-10/12">
      {props.children}
    </form>
  );
};

export default Form;
