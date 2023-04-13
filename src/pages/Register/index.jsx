import { useState } from "react";
import * as yup from "yup";
import useAuth from "../../hooks/useAuth";
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
    .min(6, "Password must be at least 6 characters")
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
  const { createUser, user } = useAuth();

  const handleFormSubmit = async (values) => {
    try {
      await schema.validate(values, { abortEarly: false });
      await handleCreateUser(values);
    } catch (err) {
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
      return false;
    }
    console.log(res);
    return res;
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
          <Button type="submit">Sign up</Button>
        </Form>
      </FormGroup>
    </Main>
  );
};

export default Register;
