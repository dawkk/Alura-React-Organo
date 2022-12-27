import './Footer.css'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'




const Footer = () => {
  return(<footer className="footer">
      <div>
        <ul>
          <li>
            <a href="www.facebook.com" target="_blank">
              <FontAwesomeIcon icon={faCheck} className="icon"/>
            </a>
          </li>
          <li>
            <a href="www.twitter.com" target="_blank">
              <FontAwesomeIcon icon={faCheck} className="icon"/>
            </a>
          </li>
          <li>
            <a href="www.instagram.com" target="_blank">
              <FontAwesomeIcon icon={faCheck} className="icon"/>
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