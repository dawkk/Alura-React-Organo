import Collaborator from '../Collaborator';
import './Team.css'

const Team = (props) => {
  const css = {backgroundColor:props.secondaryColor};
  const borderColor = {borderColor:props.primaryColor};

  return (
    props.collaborators.length > 0 ? <section className='team' style={css}>
      <h3 style={borderColor}>{props.name}</h3>
       <div className='collaborators'>
          {props.collaborators.map( collaborator => <Collaborator background={props.primaryColor} key={collaborator.name} name={collaborator.name} job={collaborator.job} image={collaborator.image} />)}
       </div>
    </section>
    : ''
  )
}

export default Team
