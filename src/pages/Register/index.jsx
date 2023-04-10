import Main from "../../components/Main";
import Form from "../../components/Form";
import Input from "../../components/Input";
import Title from "../../components/Title";

const Register = () => {
  return (
    <Main>
      <Form>
        <Title>Cadastrar</Title>
        <Input type="email" placeholder="digite seu email" id="email" />
        <Input type="email" placeholder="digite seu email" id="email" />
        <Input type="email" placeholder="digite seu email" id="email" />
        <Input type="email" placeholder="digite seu email" id="email" />
      </Form>
    </Main>
  );
};

export default Register;
