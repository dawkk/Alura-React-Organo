import './TextField.css'


const TextField = (props) => {

  const placeholderModified = `${props.placeholder}...`

  const whenTyping = (event) => {
    props.whenChanged(event.target.value)
  }

    return(
      <div className="text-field">
        <label>{props.label}</label>
        <input value={props.value} onChange={whenTyping} required={props.required} placeholder={placeholderModified}/>
      </div>
    );
}

export default TextField;