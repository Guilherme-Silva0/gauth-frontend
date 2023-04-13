import { useState } from "react";
import * as yup from "yup";
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
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  repeatpassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Repeat password is required"),
});

const Register = () => {
  const [errors, setErrors] = useState({});

  const handleFormSubmit = async (values) => {
    try {
      setErrors({});
      await schema.validate(values, { abortEarly: false });
      // Submit the form data if validation succeeds
      alert("success");
    } catch (err) {
      const newErrors = {};
      err.inner.forEach((e) => {
        newErrors[e.path] = e.message;
      });
      setErrors(newErrors);
    }
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
          {/* <GeneralError>Teste de erro</GeneralError> */}
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
