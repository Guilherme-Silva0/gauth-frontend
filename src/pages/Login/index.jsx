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
} from "../../components";

const Login = () => {
  return (
    <Main>
      <FormGroup>
        <IconAnimate />
        <Form>
          <Title>Login</Title>
          <GeneralError>E-mail or password incorrect</GeneralError>
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
          <Button type="submit">Login</Button>
          <Link to="/register">Register</Link>
        </Form>
      </FormGroup>
    </Main>
  );
};

export default Login;
