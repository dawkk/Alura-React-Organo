import TextField from '../TextField'
import './Form.css'

const Form = () => {
  return (
    <section className="form">
      <form>
        <h2>Fill the fields to create collaborator card</h2>
        <TextField label="Name" placeholder="Type your name"/>
        <TextField label="Job" placeholder="Type your job"/>
        <TextField label="Image" placeholder="Type your image link address"/>
      </form>
    </section>
  )
}

export default Form