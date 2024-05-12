import { Avatar, Container, Form, Header } from "./styles";
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { TextButton } from '../../components/TextButton';
import { FiArrowLeft, FiLock, FiMail, FiUser, FiCamera } from "react-icons/fi";

export function Profile() {
  return(
    <Container>
      <Header>
        <TextButton title="Voltar" icon={FiArrowLeft} />
      </Header>

      <Form>
        <Avatar>
          <label htmlFor="avatar">
            <FiCamera />
            <input id="avatar" type="file" />
          </label>
          <img  src="https://github.com/heitorlbelem.png" alt="avatar" />
        </Avatar>
        <Input placeholder="Nome" icon={FiUser} />
        <Input placeholder="E-mail" icon={FiMail} />
        <Input placeholder="Senha atual" icon={FiLock} />
        <Input placeholder="Nova senha" icon={FiLock} />
        <Button title="Salvar" />
      </Form>
    </Container>
  )
}