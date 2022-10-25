import './TextField.css'

const TextField = (props) => {

  // alternatively we can do this
  //const placeholderModified = `${props.placeholder}...`
  //<input placeholder={placeholderModified}/>
    return(
      <div className="text-field">
        <label>{props.label}</label>
        <input required={props.required} placeholder={props.placeholder}/>
      </div>
    );
}

export default TextField;