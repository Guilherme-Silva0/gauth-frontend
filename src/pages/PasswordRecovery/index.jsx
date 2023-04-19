import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
} from "../../components";

const PasswordRecovery = () => {
  const [isCode, setIsCode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { confirmation_code } = useParams();

  useEffect(() => {
    if (confirmation_code) setIsCode(true);
  }, []);

  const FormEmail = () => {
    return (
      <Main>
        <FormGroup additionalClass="w-auto 2xl:w-auto max-md:w-auto max-lg:w-auto">
          <Form>
            <Title>Recover Password</Title>
            <InputGroup>
              <Label htmlFor="email">E-Mail:</Label>
              <Input
                type="email"
                id="email"
                placeholder="Enter your E-mail..."
              />
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
          <Form>
            <Title>New password</Title>
            <InputGroup>
              <Label htmlFor="password">Password:</Label>
              <Input
                type="password"
                placeholder="Enter a password..."
                id="password"
              />
            </InputGroup>
            <InputGroup>
              <Label htmlFor="repeatpassword">Repeat password:</Label>
              <Input
                type="password"
                placeholder="Enter password repeat..."
                id="repeatpassword"
              />
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
