import { Container, TagsList } from "./styles"

export function MovieItem({ title, description, tags }) {
  return(
    <Container>
      <h3>{title}</h3>
      <p>{description}</p>
      <TagsList>
        { tags && tags.map(tag => <span key={tag.id}>{tag.name}</span>) }
      </TagsList>
    </Container>
  )
}