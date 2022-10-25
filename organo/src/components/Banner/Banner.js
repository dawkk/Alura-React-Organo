import './Banner.css'

function Banner () {
  // JSX
  return (
    // class is a reserved word for javascript, that is why in order to apply css we will be using className
    <header className="banner">
    <img src="/images/banner.png" alt="Banner from main page Organo"></img>
    </header>

  );
}

export default Banner