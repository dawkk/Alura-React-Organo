import './Footer.css'

const Footer = () => {
  return(<footer className="footer">
      <div>
        <ul>
          <li>
            <a href="www.facebook.com" target="_blank">
              <img src={require('../imgs/icons/fb.png')} alt=''></img>
            </a>
          </li>
          <li>
            <a href="www.twitter.com" target="_blank">
              <img src={require('../imgs/icons/tw.png')} alt=''></img>
            </a>
          </li>
          <li>
            <a href="www.instagram.com" target="_blank">
              <img src={require('../imgs/icons/ig.png')} alt=''></img>
            </a>
          </li>
        </ul>
      </div>
      <div>
        <img src="./images/logo.png" alt=''></img>
      </div>
      <div>
        <p>Desenvolvido por Alura.</p>
      </div>

    </footer>

  )
}

export default Footer