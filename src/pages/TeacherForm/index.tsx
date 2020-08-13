import React, { FormEvent, useState } from 'react'
import { useHistory } from 'react-router-dom'

import api from '../../services/api'

import PageHeader from '../../components/PageHeader'
import Input from '../../components/form/Input'
import Textarea from '../../components/Textarea'
import Select from '../../components/form/Select'

import warningIcon from '../../assets/images/icons/warning.svg'
import './styles.css'

function TeacherForm() {
  const history = useHistory()

  const [name, setName] = useState('')
  const [avatar, setAvatar] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [bio, setBio] = useState('')

  const [subject, setSubject] = useState('')
  const [cost, setCost] = useState('')

  const emptyScheduleItem = { week_day: 0, from: '', to: '' }
  const [scheduleItems, setScheduleItems] = useState([emptyScheduleItem])

  const subjectsOptions = [
    { value: 'matematica', label: 'Matemática' },
    { value: 'quimica', label: 'Química' },
    { value: 'lingua-portuguesa', label: 'Lingua Portuguesa' },
    { value: 'fisica', label: 'Física' },
  ]
  const optionsWeekDays = [
    { value: '0', label: 'Domingo' },
    { value: '1', label: 'Segunda-feira' },
    { value: '2', label: 'Terça-feira' },
    { value: '3', label: 'Quarta-feira' },
    { value: '4', label: 'Quinta-feira' },
    { value: '5', label: 'Sexta-feira' },
    { value: '6', label: 'Sábado' },
  ]

  function addNewScheduleItem() {
    setScheduleItems([...scheduleItems, emptyScheduleItem])
  }

  function setScheduleItemValue(position: number, field: string, value: string) {
    const schedules = scheduleItems.map((schedule, index) => {
      if (index === position) {
        return { ...schedule, [field]: value }
      }

      return schedule
    })

    setScheduleItems(schedules)
  }

  function handlerCreateClass(e: FormEvent) {
    e.preventDefault()

    const params = { name, avatar, whatsapp, bio, subject, cost: Number(cost), schedule: scheduleItems }
    api.post('classes', params)
      .then(() => {
        alert('Cadastro realizado com sucesso')
        history.push('/')
      })
      .catch(console.error)
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas"
        description="O primeiro passo é preencher esse formulário de inscrição"
      />

      <main>
        <form onSubmit={handlerCreateClass}>
          <fieldset>
            <legend>Seus dados</legend>

            <Input
              name="name"
              label="Nome completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <Input
              name="avatar"
              label="Avatar"
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
            />

            <Input
              name="whatsapp"
              label="WhatsApp"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
            />

            <Textarea
              name="bio"
              label="Biografia"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>

            <Select
              name="subject"
              label="Matéria"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              options={subjectsOptions}
            />

            <Input
              name="cost"
              label="Custo da sua hora por aula"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>
              Horários disponíveis

              <button type="button" onClick={addNewScheduleItem}>
                + Novo horário
              </button>
            </legend>

            {scheduleItems.map((schedule, i) => {
              return (
                <div key={i} className="schedule-item">
                  <Select
                    name="week_day"
                    label="Dia da semana"
                    options={optionsWeekDays}
                    value={schedule.week_day}
                    onChange={(e) => setScheduleItemValue(i, e.target.id, e.target.value)}
                  />

                  <Input
                    name="from"
                    label="Das"
                    type="time"
                    value={schedule.from}
                    onChange={(e) => setScheduleItemValue(i, e.target.id, e.target.value)}
                  />

                  <Input
                    name="to"
                    label="Até"
                    type="time"
                    value={schedule.to}
                    onChange={(e) => setScheduleItemValue(i, e.target.id, e.target.value)}
                  />
                </div>
              )
            })}
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso importante" />
              Importante!<br />
              Preencha todos os dados
            </p>

            <button type="submit">
              Salvar cadastro
            </button>
          </footer>
        </form>
      </main>
    </div>
  )
}

export default TeacherForm
