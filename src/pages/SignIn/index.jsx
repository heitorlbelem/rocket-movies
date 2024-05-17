import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { TextButton } from "../../components/TextButton";
import { Container, Background, Form, FormTitle, InputsContainer, ButtonsContainer } from "./styles";
import { FiMail, FiLock } from "react-icons/fi";

export function SignIn() {
  return(
    <Container>
      <Form>
        <FormTitle>
          <h1>RocketMovies</h1>
          <p>Aplicação para acompanhar tudo que assistir.</p>
        </FormTitle>

        <h2>Faça seu login</h2>

        <InputsContainer>
          <Input type="text" placeholder="E-mail" icon={FiMail} />
          <Input type="password" placeholder="Senha" icon={FiLock} />
        </InputsContainer>

        <ButtonsContainer>
          <Button title="Entrar" />
          <TextButton title="Criar conta" />
        </ButtonsContainer>
      </Form>
      <Background />
    </Container>
  )
}