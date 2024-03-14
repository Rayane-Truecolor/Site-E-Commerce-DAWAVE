import React from 'react'
import { useTranslation } from 'react-i18next'

const Footer: React.FC = () => {
  const { i18n } = useTranslation()

  return (
    <footer>
      <nav className="nav-footer">
        <ul className="un">
          <li>
            <a href="/faq">FAQ</a>
          </li>
          <li>
            <a href="/contact">{i18n.t('FooterContact')}</a>
          </li>
          <li>
            <a href="/CGU">{i18n.t('FooterCGU')}</a>
          </li>
          <li>
            <a href="/qui">{i18n.t('CGU')}</a>
          </li>
          <li>
            <a href="/mention">{i18n.t('FooterMention')}</a>
          </li>
        </ul>
      </nav>
      
      <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"
>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
          alt="Instagram"
          style={{ width: '50px', marginLeft: '1rem' }}
        />
      </a>
      <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" style={{ width: '50px', marginLeft: '1rem' }}
>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png"
          alt="Facebook"
          style={{ width: '50px', marginLeft: '1rem' }}
        />
      </a>
    
      <div className="logo">
        <a href="/">Da'Wave!</a>
      </div>
      <div className="allright">Da'Wave! 2023 All Rights Reserved</div>
    </footer>
  )
}

export default Footer
