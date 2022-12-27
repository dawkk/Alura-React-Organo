import './Collaborator.css'

const Collaborator = ({name, image, job, background}) => {
  return (<div className='collaborator'>
    <div className='top' style={{backgroundColor: background}}>
      <img src={image} alt='{name}'/>
    </div>
    <div className='bottom'>
      <h4>{name}</h4>
      <h5>{job}</h5>
    </div>
  </div>)
}

export default Collaborator