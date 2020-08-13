import React, { FormEvent, useState } from 'react'

import api from '../../services/api'

import PageHeader from '../../components/PageHeader'
import TeacherItem, { Teacher } from '../../components/TeacherItem'
import Input from '../../components/form/Input'
import Select from '../../components/form/Select'

import './styles.css'

function TeacherList() {
  const [subject, setSubject] = useState('')
  const [weekDay, setWeekDay] = useState('')
  const [time, setTime] = useState('')

  const [teachers, setTeachers] = useState([])

  const optionsSubjects = [
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

  async function searchTeachers(e: FormEvent) {
    e.preventDefault()

    const params = { subject, time, week_day: weekDay }
    const { data } = await api.get('classes', { params })
    setTeachers(data)
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis">
        <form id="search-teachers" onSubmit={searchTeachers}>
          <Select
            name="subject"
            label="Matéria"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            options={optionsSubjects}
          />

          <Select
            name="week_day"
            label="Dia da semana"
            value={weekDay}
            onChange={(e) => setWeekDay(e.target.value)}
            options={optionsWeekDays}
          />

          <Input
            name="time"
            label="Hora"
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />

          <button type="submit">
            Buscar
          </button>
        </form>
      </PageHeader>

      <main>
        {teachers.map((teacher: Teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher} />
        })}
      </main>
    </div>
  )
}

export default TeacherList
