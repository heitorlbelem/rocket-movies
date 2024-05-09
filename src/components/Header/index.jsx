import { Container, Profile, ProfileImage } from "./styles";
import { Input } from "../Input"

export function Header() {
  return(
    <Container>
      <p>RocketMovies</p>
      <Input placeholder="Pesquisar pelo título" />
      <Profile>
        <section>
          <p>Heitor Belém</p>
          <span>sair</span>
        </section>
        <ProfileImage src="https://github.com/heitorlbelem.png" alt="" />
      </Profile>
    </Container>
  )
}