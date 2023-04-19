import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Thanks from "./pages/Thanks";
import useTheme from "./hooks/useTheme";
import { ThemeButton } from "./components";
import Confirm from "./pages/Confirm";
import PasswordRecovery from "./pages/PasswordRecovery";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <ThemeButton theme={theme} onClick={toggleTheme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/thanks" element={<Thanks />} />
        <Route path="/confirm/:confirmation_code" element={<Confirm />} />
        <Route path="/password_recovery" element={<PasswordRecovery />} />
        <Route
          path="password_recovery/:confirmation_code"
          element={<PasswordRecovery />}
        />
      </Routes>
    </>
  );
};

export default App;
