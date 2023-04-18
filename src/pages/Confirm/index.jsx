import { useEffect, useState } from "react";
import { Error, Load, Main, Title } from "../../components";
import useAuth from "../../hooks/useAuth";
import { useNavigate, useParams } from "react-router-dom";

const Confirm = () => {
  const [error, setError] = useState("");
  const { confirmCode } = useAuth();
  const { confirmation_code } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    handleConfirm(confirmation_code);
  }, []);

  const handleConfirm = async (confirmation_code) => {
    const res = await confirmCode(confirmation_code);
    if (res.error === true) {
      setError(res.message);
    } else {
      setError("");
      localStorage.setItem("token", res.token);
      navigate("/");
    }
  };
  return (
    <Main>
      {error ? (
        <Error>{error}!</Error>
      ) : (
        <>
          <Title>Wait, we are confirming your email!</Title>
          <Load />
        </>
      )}
    </Main>
  );
};

export default Confirm;
