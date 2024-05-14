import { Form, Container, TagsSection, Tag } from './styles'
import { Header } from '../../components/Header'
import { TextButton } from '../../components/TextButton'
import { FiArrowLeft, FiPlus, FiX } from 'react-icons/fi'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function NewMovie(){
  return(
    <>
      <Header />
      <Container>
        <TextButton title="Voltar" icon={FiArrowLeft} />
        <h2>Novo filme</h2>
        <Form>
          <Input placeholder="Título" />
          <Input placeholder="Sua nota (de 0 a 5)" />
          <textarea name="observações" placeholder='Observações' />
          <TagsSection>
            <h3>Marcadores</h3>
            <ul>
              <Tag><span>React</span> <FiX /></Tag>
              <Tag newTag><span>React</span> <FiPlus /></Tag>
            </ul>
          </TagsSection>
          <Button title="Excluir filme" dark={true}/>
          <Button title="Salvar alterações" />
        </Form>
      </Container>
    </>
  )
}