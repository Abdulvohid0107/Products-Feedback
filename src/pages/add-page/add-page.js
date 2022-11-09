import "./add-page.scss"
import { AddEditCard } from "../../components/add-edit-card/add-edit-card"
import { Container } from "../../components/container/container"
import { GoBack } from "../../components/go-back/go-back"
import { TitleAddEdit } from "../../components/title-add-edit/title-add-edit"


export const AddPage = () => {
  return <Container className="add-page">
    <GoBack></GoBack>
    <AddEditCard>
      <TitleAddEdit>
      Create New Feedback
      </TitleAddEdit>
    </AddEditCard>
  </Container>
}