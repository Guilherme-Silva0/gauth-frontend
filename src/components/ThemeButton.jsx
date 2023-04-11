import { BsMoonStars, BsSun } from "react-icons/bs";

const ThemeButton = ({ theme, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-gray-50 p-3 rounded-lg shadow-xl text-2xl text-fist font-black fixed right-5 top-5 dark:bg-fist dark:text-third"
    >
      {theme === "light" ? <BsMoonStars /> : <BsSun />}
    </button>
  );
};

export default ThemeButton;
