import { Container, Background, Form } from "./styles";

export function SignIn() {
  return(
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Faça seu login</h2>

        <input type="text" placeholder="E-mail" />
        <input type="text" placeholder="Senha" />

        <button>Entrar</button>
      </Form>
      <Background />
    </Container>
  )
}