import "./add-page.scss"
import { AddEditCard } from "../../components/add-edit-card/add-edit-card"
import { Container } from "../../components/container/container"
import { GoBack } from "../../components/go-back/go-back"
import add from "../../assets/images/anne.png"


export const AddPage = () => {
  return <Container className="add-page">
    <GoBack></GoBack>
    <AddEditCard>
      Assalamu alaykum

      <img src={add} alt="" />
    </AddEditCard>
  </Container>
}