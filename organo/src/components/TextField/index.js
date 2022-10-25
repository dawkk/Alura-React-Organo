import './TextField.css'

const TextField = (props) => {

  // alternatively we can do this
  //const placeholderModified = `${props.placeholder}...`
    return(
      <div className="text-field">
        <label>{props.label}</label>
        <input placeholder={props.placeholder}/>
        {/* <input placeholder={placeholderModified}/> */}
      </div>
    );
}

export default TextField;