import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { TextButton } from "../../components/TextButton";
import { Container, Background, Form, FormTitle, InputsContainer, ButtonsContainer } from "./styles";
import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi";

export function SignUp() {
  return(
    <Container>
      <Form>
        <FormTitle>
          <h1>RocketMovies</h1>
          <p>Aplicação para acompanhar tudo que assistir.</p>
        </FormTitle>

        <h2>Crie sua conta</h2>

        <InputsContainer>
          <Input type="text" placeholder="Nome" icon={FiUser} />
          <Input type="text" placeholder="E-mail" icon={FiMail} />
          <Input type="password" placeholder="Senha" icon={FiLock} />
        </InputsContainer>

        <ButtonsContainer>
          <Button title="Cadastrar" />
          <TextButton title="Voltar para login" icon={FiArrowLeft} />
        </ButtonsContainer>
      </Form>
      <Background />
    </Container>
  )
}