import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

import {
  Main,
  Form,
  Input,
  Title,
  Button,
  Label,
  InputGroup,
  IconAnimate,
  FormGroup,
  GeneralError,
  Link,
  Text,
  Load,
} from "../../components";

const Login = () => {
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { authenticateUser } = useAuth();
  const navigate = useNavigate();

  const handleFormSubmit = async (values) => {
    setIsLoading(true);
    await handleAuthenticateUser(values);
    setIsLoading(false);
  };

  const handleAuthenticateUser = async (values) => {
    setErrors({});
    const res = await authenticateUser(values);
    if (res.error === true) {
      setErrors({ general: res.message });
      setIsLoading(false);
      return;
    }
    localStorage.setItem("token", res.token);
    navigate("/");
    return;
  };

  return (
    <Main>
      <FormGroup>
        <IconAnimate />
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            const { email, password } = e.target.elements;
            handleFormSubmit({
              email: email.value,
              password: password.value,
            });
          }}
        >
          <Title>Login</Title>
          {errors.general && <GeneralError>{errors.general}</GeneralError>}
          <InputGroup>
            <Label htmlFor="email">E-Mail</Label>
            <Input type="email" id="email" placeholder="Enter your E-mail..." />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              placeholder="Enter your password..."
            />
          </InputGroup>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? <Load /> : "Login"}
          </Button>
          <Text>
            Don't have an account? <Link to="/register">sign up</Link>
          </Text>
        </Form>
      </FormGroup>
    </Main>
  );
};

export default Login;
