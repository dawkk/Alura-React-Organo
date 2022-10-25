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

  return (
    <section className="form">
      <form>
        <h2>Fill the fields to create collaborator card</h2>
        <TextField label="Name" placeholder="Type your name"/>
        <TextField label="Job" placeholder="Type your job"/>
        <TextField label="Image" placeholder="Type your image link address"/>
        <DropDownList label="Teams" itens={teams}/>
      </form>
    </section>
  )
}

export default Form