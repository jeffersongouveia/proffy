import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
  return (
      <article className="teacher-item">
        <header>
          <img src="https://pbs.twimg.com/profile_images/1262289899786559489/wxFM6Q30_400x400.jpg" alt="Emma Bostian" />

          <div>
            <strong>Emma Bostian</strong>
            <span>Front End</span>
          </div>
        </header>

        <p>
          Software Engineer at <a href="https://www.twitter.com/spotify">@spotify</a> in Stockholm 🇸🇪<br/>
          Podcasting <a href="https://www.twitter.com/ladybugpodcast">@ladybugpodcast</a> 🎙💻<br/>
          American Abroad 🇺🇸
        </p>

        <footer>
          <p>
            Preço/hora
            <strong>R$ 300,00</strong>
          </p>

          <button type="button">
            <img src={whatsappIcon} alt="WhatsApp" />
            Entrar em contato
          </button>
        </footer>
      </article>
  )
}

export default TeacherItem
