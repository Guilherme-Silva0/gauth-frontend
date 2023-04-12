import { BsMoonStars, BsSun } from "react-icons/bs";

const ThemeButton = ({ theme, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-gray-50 p-3 rounded-lg shadow-xl text-xl text-fist font-black fixed right-4 top-4 dark:bg-fist dark:text-third"
    >
      {theme === "light" ? <BsMoonStars /> : <BsSun />}
    </button>
  );
};

export default ThemeButton;
