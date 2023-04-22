import { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

const Input = ({ type, placeholder, id }) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleInputPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleInputType = () => {
    if (type === "password") {
      if (showPassword) return "text";
      return "password";
    } else {
      return type;
    }
  };

  return (
    <div className="relative">
      <input
        type={handleInputType()}
        placeholder={placeholder}
        id={id}
        className="w-full h-11 rounded-lg py-2 px-4 outline-none placeholder-gray-400 transition-all shadow-inside dark:shadow-lg dark:bg-second dark:text-gray-100 dark:border-none focus:ring-2 focus:ring-third focus:placeholder-third focus:border-none"
      />
      {type === "password" && (
        <button
          type="button"
          className="text-fist text-xl p-1 rounded-full absolute top-1/2 right-3 transform -translate-y-1/2 transition-all dark:text-gray-200 dark:active:bg-gray-100/20 active:bg-gray-950/20"
          onClick={toggleInputPassword}
        >
          {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
        </button>
      )}
    </div>
  );
};

export default Input;
