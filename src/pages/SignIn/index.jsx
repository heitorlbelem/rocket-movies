import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { TextButton } from "../../components/TextButton";
import { Container, Background, Form } from "./styles";
import { FiMail, FiLock } from "react-icons/fi";

export function SignIn() {
  return(
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Faça seu login</h2>

        <Input type="text" placeholder="E-mail" icon={FiMail} />
        <Input type="password" placeholder="Senha" icon={FiLock} />

        <Button title="Entrar" />
        <TextButton title="Criar conta" />
      </Form>
      <Background />
    </Container>
  )
}