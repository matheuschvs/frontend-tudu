import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'
import br from 'date-fns/locale/pt-BR'
import { useEffect, useState } from 'react'
import { format } from 'date-fns'
import dayjs from 'dayjs'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'

import { api } from '../../services/api'

import { Container, Days, Day, Todo } from './styles'
import { Link } from 'react-router-dom'

dayjs.extend(isSameOrAfter)

const daysOfWeek = [
  'Dom',
  'Seg',
  'Ter',
  'Qua',
  'Qui',
  'Sex',
  'Sab'
]

export function Planner() {
  const [todos, setTodos] = useState([])
  const date = new Date()

  const todosAfter = todos?.filter(todo => dayjs(todo.deadline)
    .isSameOrAfter(dayjs(), 'day'))
  const todoDays = todosAfter
    .map(todo => new Date(todo.deadline))
  const groupByDay = todosAfter.reduce((acc, todo) => {
    if (!acc[todo.deadline]) {
      acc[todo.deadline] = []
    }
    acc[todo.deadline].push(todo)
    return acc
  }, {})


  useEffect(() => {
    fetchTodos()
  }, [])
  useEffect(() => {
    console.log(groupByDay)
  }, [groupByDay])

  async function fetchTodos() {
    const response = await api.get('/todos?status=WAITING')

    setTodos(response.data)
  }

  return (
    <Container>
      <h1>Planner</h1>
      <DayPicker
        locale={br}
        formatters={{
          formatCaption: (date) => (
            format(date, 'LLLL', { locale: br })
          ),
          formatWeekdayName: (date) => (
            format(date, 'EEEEE', { locale: br })
          )
        }}
        modifiers={{ hasTodo: todoDays }}
        modifiersClassNames={{ hasTodo: 'has-todo' }}
      />
      <Days>
        {Object.keys(groupByDay).map((date, i) => (
          <li key={i}>
            <Day>
              <p>{daysOfWeek[dayjs(date).day()]}</p>
              <b>{dayjs(date).date()}</b>
            </Day>
            <ul>
              {groupByDay[date].map(todo => (
                <Todo key={todo.id} bgColor={todo.category.color}>
                  <Link to={`/todos/${todo.id}`}>
                    <h3>{todo.title}</h3>
                  </Link>
                  <p>{todo.description}</p>
                </Todo>
              ))
              }
            </ul>
          </li>
        ))}
      </Days>
    </Container>
  )
}
