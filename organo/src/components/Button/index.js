import './Button.css'

// Just a reminder, why are we using props children? Because if we include an icon or any other HTML element or image inside the button it would not trigger, but using props.children, any children will then work as the button is supossed to.
const Button = (props) => {
  return (<button className='button'>
      {props.children}
      </button>);
}

export default Button