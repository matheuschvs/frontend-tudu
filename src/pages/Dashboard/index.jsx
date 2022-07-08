import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { motion } from 'framer-motion'

import { CompletedTodo } from '../../components/CompletedTodo'
import { InProgressTodo } from '../../components/InProgressTodo'
import { WaitingTodo } from '../../components/WaitingTodo'

import { api } from '../../services/api'
import { numberToPercent } from '../../utils/numberToPercent'

import {
  Container,
  Link,
  InProgressTodosList
} from './styles'

export function Dashboard() {
  const [waitingTodos, setWaitingTodos] = useState([])
  const [completedTodos, setCompletedTodos] = useState([])
  const [page, setPage] = useState(0)

  useEffect(() => {
    fetchWaitingTodos()

    window.addEventListener('scroll', handleScroll, {
      passive: true
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  useEffect(() => {
    fetchCompletedTodos()
  }, [page])

  async function fetchWaitingTodos() {
    try {
      const waitingResponse = await api.get('/todos?status=WAITING')

      setWaitingTodos(waitingResponse.data)
    } catch (err) {
      toast.error('Erro ao tentar carregar tarefas')
    }
  }

  async function fetchCompletedTodos() {
    try {
      const completedResponse = await api.get(
        `/todos?status=DONE&offset=${page * 3}&limit=3`
      )
      console.log(completedResponse.data)

      if (page === 0) {
        setCompletedTodos(completedResponse.data)
      } else {
        setCompletedTodos([...completedTodos, ...completedResponse.data])
      }
    } catch (err) {
      toast.error('Erro ao tentar carregar tarefas')
    }
  }

  function handleScroll() {
    const trial = Math.ceil(window.innerHeight + window.scrollY)
    const height = document.documentElement.scrollHeight

    if (trial >= height) {
      setPage(page + 1)
    }
  }

  const delay = ms => new Promise(res => setTimeout(res, ms));

  async function handleToggleTodoStatus(todo_id, todo_status) {
    try {
      await delay(1000)

      await api.put(`/todos/${todo_id}`, {
        status: todo_status === 'DONE' ? 'WAITING' : 'DONE'
      })

      toast.success('status atualizado com sucesso!')
    } catch (err) {
      toast.error('Não foi possível alterar o status')
    }

    await fetchWaitingTodos()
    setPage(0)
  }

  return (
    <Container
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
    >
      <h1>Tarefas</h1>
      <section>
        <h2>A FAZER</h2>
        <ul
          className='startHeight'
        >
          {
            waitingTodos.filter((t, i) => i < 3).map(todo => (
              <WaitingTodo
                key={todo.id}
                todoId={todo.id}
                title={todo.title}
                description={todo.description}
                bgColor={todo.category.color}
                onCheck={() => handleToggleTodoStatus(todo.id, todo.status)}
              />
            ))
          }
        </ul>
        <Link to='#'>Ver todos</Link>
      </section>
      <section className='startHeight'>
        <h2>EM PROGRESSO</h2>
        <InProgressTodosList>
          {
            waitingTodos.map(todo => {
              const completedTasksNumber = todo.tasks.filter(t => t.status === "DONE").length
              const percentNumber = completedTasksNumber / (todo.tasks.length || 1)
              const percentString = numberToPercent(percentNumber)

              todo.percent = percentString
              return todo
            }).sort((a, b) => a.percent > b.percent ? -1 : 1).map(todo => (
              <InProgressTodo
                key={todo.id}
                todoId={todo.id}
                title={todo.title}
                description={todo.description}
                bgColor={todo.category.color}
                percent={todo.percent}
              />
            )
            )
          }
        </InProgressTodosList>
        <Link to='#'>Ver todos</Link>
      </section>
      <section className='startHeight'>
        <h2>CONCLUÍDO</h2>
        <ul>
          {
            completedTodos.map(todo => (
              <CompletedTodo
                key={todo.id}
                isChecked={todo.status === 'DONE'}
                todoId={todo.id}
                title={todo.title}
                description={todo.description}
                bgColor={todo.category.color}
                onCheck={() => handleToggleTodoStatus(todo.id, todo.status)}
              />
            ))
          }
        </ul>
      </section>
    </Container>
  )
}