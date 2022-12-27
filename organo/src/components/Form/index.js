import { useState } from 'react'
import Button from '../Button'
import DropDownList from '../DropDownList'
import TextField from '../TextField'
import './Form.css'

const Form = (props) => {

  const [name, setName] = useState('')
  const [job, setJob] = useState('')
  const [image, setImage] = useState('')
  const [team, setTeam] = useState('')

  const saving = (event) => {
    event.preventDefault()
    props.collaboratorAdded({
      name,
      job,
      image,
      team
    })
    setName('')
    setJob('')
    setImage('')
    setTeam('')
    
    console.log('Form submitted => ', name, job, image, team)
  }

  return (
    <section className="form">
      <form onSubmit={saving}>
        <h2>Fill the fields to create collaborator card</h2>
        <TextField 
          required={true} 
          label="Name" 
          placeholder="Type your name" 
          value={name} 
          whenChanged={value => setName(value)}/>
        <TextField 
          required={true} 
          label="Job" 
          placeholder="Type your job" 
          value={job} 
          whenChanged={value => setJob(value)}/>
        <TextField 
          label="Image" 
          placeholder="Type your image link address" 
          value={image} 
          whenChanged={value => setImage(value)}/>
        <DropDownList 
          required={true} 
          label="Teams" 
          itens={props.teams}
          value={team}
          whenChanged={value => setTeam(value)}
          />
        <Button>Create Card</Button>
      </form>
    </section>
  )
}

export default Form