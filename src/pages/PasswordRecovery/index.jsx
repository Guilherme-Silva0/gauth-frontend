import { useEffect, useState } from "react";
import * as yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import {
  Button,
  Form,
  FormGroup,
  Input,
  InputGroup,
  Label,
  Link,
  Main,
  Title,
  Load,
  Error,
  GeneralError,
} from "../../components";

const schemaEmail = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email")
    .required("Email is required")
    .trim(),
});

const schemaPassword = yup.object().shape({
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

const PasswordRecovery = () => {
  const [isCode, setIsCode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const { confirmation_code } = useParams();
  const { passwordRecovery, updatePassword } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (confirmation_code) setIsCode(true);
  }, []);

  const handleFormEmailSubmit = async (values) => {
    try {
      setIsLoading(true);
      await schemaEmail.validate(values, { abortEarly: false });
      await handlePasswordRecovery(values);
    } catch (err) {
      setIsLoading(false);
      const newErrors = {};
      err.inner.forEach((e) => {
        newErrors[e.path] = e.message;
      });
      setErrors(newErrors);
    }
  };

  const handleFormPasswordSubmit = async (values) => {
    try {
      setIsLoading(true);
      await schemaPassword.validate(values, { abortEarly: false });
      await handleUpdatePassword(values);
    } catch (err) {
      setIsLoading(false);
      const newErrors = {};
      err.inner.forEach((e) => {
        newErrors[e.path] = e.message;
      });
      setErrors(newErrors);
    }
  };

  const handlePasswordRecovery = async (values) => {
    setErrors({});
    const res = await passwordRecovery(values);
    if (res.error === true) {
      setErrors({ general: res.message });
      setIsLoading(false);
      return false;
    }
    setIsLoading(false);
    navigate("/recovery_email_message");
  };

  const handleUpdatePassword = async (values) => {
    setErrors({});
    const res = await updatePassword({
      password: values.password,
      confirmation_code,
    });
    if (res.error === true) {
      setErrors({ general: res.message });
      setIsLoading(false);
      return false;
    }
    setIsLoading(false);
    navigate("/login");
  };

  const FormEmail = () => {
    return (
      <Main>
        <FormGroup additionalClass="w-auto 2xl:w-auto max-md:w-auto max-lg:w-auto">
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              const { email } = e.target.elements;
              handleFormEmailSubmit({
                email: email.value,
              });
            }}
          >
            <Title>Recover Password</Title>
            {errors.general && (
              <GeneralError>Hear an error, try again later</GeneralError>
            )}
            <InputGroup>
              <Label htmlFor="email">E-Mail:</Label>
              <Input
                type="email"
                id="email"
                placeholder="Enter your E-mail..."
              />
              {errors.email && <Error>{errors.email}</Error>}
            </InputGroup>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? <Load /> : "Recover"}
            </Button>
            <Link to="/login">Back to login page</Link>
          </Form>
        </FormGroup>
      </Main>
    );
  };

  const FormPassword = () => {
    return (
      <Main>
        <FormGroup additionalClass="w-auto 2xl:w-auto max-md:w-auto max-lg:w-auto">
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              const { password, repeatpassword } = e.target.elements;
              handleFormPasswordSubmit({
                password: password.value,
                repeatpassword: repeatpassword.value,
              });
            }}
          >
            <Title>New password</Title>
            {errors.general && <GeneralError>{errors.general}</GeneralError>}
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
              {isLoading ? <Load /> : "Update"}
            </Button>
          </Form>
        </FormGroup>
      </Main>
    );
  };
  return <>{isCode ? <FormPassword /> : <FormEmail />}</>;
};

export default PasswordRecovery;
