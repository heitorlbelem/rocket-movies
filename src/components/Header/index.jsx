import { Container, Profile, ProfileImage } from "./styles";
import { Input } from "../Input"
import { FiSearch } from "react-icons/fi";

export function Header() {
  return(
    <Container>
      <h2>RocketMovies</h2>
      <Input placeholder="Pesquisar pelo título" icon={FiSearch}/>
      <Profile>
        <section>
          <p>Heitor Belém</p>
          <a src="#">sair</a>
        </section>
        <ProfileImage
          alt="imagem do perfil do usuário"
          src="https://github.com/heitorlbelem.png"
        />
      </Profile>
    </Container>
  )
}