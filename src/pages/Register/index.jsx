import Main from "../../components/Main";
import Form from "../../components/Form";
import Input from "../../components/Input";
import Title from "../../components/Title";
import Button from "../../components/Button";
import Label from "../../components/Label";
import InputGroup from "../../components/InputGroup";
import IconAnimate from "../../components/IconAnimate";
import FormGroup from "../../components/FormGroup";
import GeneralError from "../../components/GeneralError";
import Error from "../../components/Error";

const Register = () => {
  return (
    <Main>
      <FormGroup>
        <IconAnimate />
        <Form>
          <Title>Create an account</Title>
          {/* <GeneralError>Teste de erro</GeneralError> */}
          <InputGroup>
            <Label htmlFor="name">Name:</Label>
            <Input type="text" placeholder="Type your name..." id="name" />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="email">E-mail:</Label>
            <Input type="email" placeholder="Enter your E-mail..." id="email" />
            {/* <Error>Insira um e-mail válido!</Error> */}
          </InputGroup>
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
          <Button type="submit">Sign up</Button>
        </Form>
      </FormGroup>
    </Main>
  );
};

export default Register;
