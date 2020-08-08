import React from 'react'

import api from '../../services/api'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'

export interface Teacher {
  id: number
  name: string
  subject: string
  cost: number
  avatar: string
  whatsapp: string
  bio: string
}

interface TeacherItemProps {
  teacher: Teacher
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  function createNewConnection() {
    api.post('connections', { user_id: teacher.id })
  }

  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt={teacher.name} />

        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>

      <p>{teacher.bio}</p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ {teacher.cost}</strong>
        </p>

        <button type="button" onClick={createNewConnection}>
          <img src={whatsappIcon} alt="WhatsApp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem
