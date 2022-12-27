import Collaborator from '../Collaborator';
import './Team.css'

const Team = (props) => {
  const css = {backgroundColor:props.secondaryColor};
  const borderColor = {borderColor:props.primaryColor};

  return (
    <section className='team' style={css}>
      <h3 style={borderColor}>{props.name}</h3>
      <Collaborator/>
      <Collaborator/>
    </section>
  )
}

export default Team