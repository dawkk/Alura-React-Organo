import { useState } from 'react'
import Button from '../Button'
import DropDownList from '../DropDownList'
import TextField from '../TextField'
import './Form.css'

const Form = (props) => {

  const teams = [
    'Programming',
    'Front-End',
    'Data Science',
    'Devops',
    'UX & Design',
    'Mobile',
    'Innovation & Management'
  ]

  const [name, setName] = useState('')
  const [job, setJob] = useState('')
  const [image, setImage] = useState('')
  const [team, setTeam] = useState('')

  const saving = (event) => {
    event.preventDefault()
    props.userRegistered({
      name,
      job,
      image,
      team
    })

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
          itens={teams}
          value={team}
          whenChanged={value => setTeam(value)}
          />
        <Button>Create Card</Button>
      </form>
    </section>
  )
}

export default Form