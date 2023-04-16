import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useEffect } from "react";
import { Main, Text, Title } from "../../components";
import { BsInstagram } from "react-icons/bs";

const Home = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (Object.keys(user).length === 0) {
      navigate("/login");
    }
  }, []);

  return (
    <Main>
      <div className="bg-gray-100 max-w-3xl p-8 rounded-xl shadow-xl dark:bg-fist mx-4">
        <Title additionalClass="text-center">Welcome {user.name} 🤗️</Title>
        <Text additionalClass="text-justify">
          Thank you for testing my login application! I hope that you have a
          great experience using it and that you have enjoyed the features and
          functionality that I have developed for you. My goal is to provide a
          secure and user-friendly platform for users, and your opinion is very
          valuable to me. If you have any suggestions or feedback to help me
          improve, please don't hesitate to share them via the link below.
          Thanks again and hope to see you soon! ❤️
        </Text>
        <a
          href="https://www.instagram.com/guisilva_dev/"
          target="_blank"
          className="flex items-center gap-2 w-fit px-4 py-2 mt-4 mx-auto bg-pink-600 rounded text-gray-200 text-sm font-bold shadow transition-all hover:scale-110"
        >
          <BsInstagram className="text-lg" /> Instagram to feedback
        </a>
      </div>
    </Main>
  );
};

export default Home;
