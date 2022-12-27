import './Team.css'

const Team = (props) => {
  const css = {backgroundColor:props.secondaryColor};
  const borderColor = {borderColor:props.primaryColor};

  return (
    <section className='team' style={css}>
      <h3 style={borderColor}>{props.name}</h3>
    </section>
  )
}

export default Team