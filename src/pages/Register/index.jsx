import { useState } from "react";
import * as yup from "yup";
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
  Error,
  Load,
  Link,
  Text,
} from "../../components";

const schema = yup.object().shape({
  name: yup.string().required("Name is required").trim(),
  email: yup
    .string()
    .email("Invalid email")
    .required("Email is required")
    .trim(),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!-@#$%^&*()_+=[\]{}|\\,./<>?;:'"`~])/,
      "Password must include at least one uppercase letter, one lowercase letter, one number and one special character"
    )
    .min(8, "Password must be at least 8 characters")
    .required("Password is required")
    .trim(),
  repeatpassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Repeat password is required")
    .trim(),
});

const Register = () => {
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { createUser } = useAuth();
  const navigate = useNavigate();

  const handleFormSubmit = async (values) => {
    try {
      setIsLoading(true);
      await schema.validate(values, { abortEarly: false });
      await handleCreateUser(values);
    } catch (err) {
      setIsLoading(false);
      const newErrors = {};
      err.inner.forEach((e) => {
        newErrors[e.path] = e.message;
      });
      setErrors(newErrors);
    }
  };

  const handleCreateUser = async (values) => {
    setErrors({});
    const res = await createUser(values);
    if (res.error === true) {
      setErrors({ general: res.message });
      setIsLoading(false);
      return false;
    }
    setIsLoading(false);
    navigate("/thanks");
  };

  return (
    <Main>
      <FormGroup>
        <IconAnimate />
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            const { name, email, password, repeatpassword } = e.target.elements;
            handleFormSubmit({
              name: name.value,
              email: email.value,
              password: password.value,
              repeatpassword: repeatpassword.value,
            });
          }}
        >
          <Title>Create an account</Title>
          {errors.general && <GeneralError>{errors.general}</GeneralError>}
          <InputGroup>
            <Label htmlFor="name">Name:</Label>
            <Input type="text" placeholder="Type your name..." id="name" />
            {errors.name && <Error>{errors.name}</Error>}
          </InputGroup>
          <InputGroup>
            <Label htmlFor="email">E-mail:</Label>
            <Input type="email" placeholder="Enter your E-mail..." id="email" />
            {errors.email && <Error>{errors.email}</Error>}
          </InputGroup>
          <InputGroup>
            <Label htmlFor="password">Password:</Label>
            <Input
              type="password"
              placeholder="Enter a password..."
              id="password"
            />
            {errors.password && <Error>{errors.password}</Error>}
          </InputGroup>
          <InputGroup>
            <Label htmlFor="repeatpassword">Repeat password:</Label>
            <Input
              type="password"
              placeholder="Enter password repeat..."
              id="repeatpassword"
            />
            {errors.repeatpassword && <Error>{errors.repeatpassword}</Error>}
          </InputGroup>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? <Load /> : "Sign up"}
          </Button>
          <Text>
            Already have an account? <Link to="/login">log in</Link>
          </Text>
        </Form>
      </FormGroup>
    </Main>
  );
};

export default Register;
