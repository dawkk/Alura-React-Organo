import Button from '../Button'
import DropDownList from '../DropDownList'
import TextField from '../TextField'
import './Form.css'

const Form = () => {

  const teams = [
    'Programming',
    'Front-End',
    'Data Science',
    'Devops',
    'UX & Design',
    'Mobile',
    'Innovation & Management'
  ]

  const saving = (event) => {
    event.preventDefault()
    console.log('Form submitted')
  }

  return (
    <section className="form">
      <form onSubmit={saving}>
        <h2>Fill the fields to create collaborator card</h2>
        <TextField required={true} label="Name" placeholder="Type your name"/>
        <TextField required={true} label="Job" placeholder="Type your job"/>
        <TextField label="Image" placeholder="Type your image link address"/>
        <DropDownList required={true} label="Teams" itens={teams}/>
        <Button>Create Card</Button>
      </form>
    </section>
  )
}

export default Form