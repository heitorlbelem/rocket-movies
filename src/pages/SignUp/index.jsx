import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { TextButton } from "../../components/TextButton";
import { Container, Background, Form } from "./styles";
import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi";

export function SignUp() {
  return(
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Crie sua conta</h2>

        <Input type="text" placeholder="Nome" icon={FiUser} />
        <Input type="text" placeholder="E-mail" icon={FiMail} />
        <Input type="password" placeholder="Senha" icon={FiLock} />

        <Button title="Criar conta" />
        <TextButton title="Voltar para login" icon={FiArrowLeft}/>
      </Form>
      <Background />
    </Container>
  )
}