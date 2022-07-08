import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { BsArrowLeft, BsCalendar4, BsThreeDots, BsPaperclip } from 'react-icons/bs'
import { AiOutlineTag } from 'react-icons/ai'
import { MdOutlineSubdirectoryArrowRight } from 'react-icons/md'
import { FaTelegramPlane } from 'react-icons/fa'
import { HiPlus } from 'react-icons/hi'
import { toast } from 'react-toastify'
import { lighten } from 'polished'
import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'

import { api } from '../../services/api'
import { Checkbox } from '../../components/Checkbox'

import {
  Container,
  Info,
  Users,
  Files,
  Hr,
  Tasks,
  Comments
} from './styles'

export function Todo() {
  const [todo, setTodo] = useState({})
  const [comment, setComment] = useState('')

  const { todoId } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    fetchTodo()
  }, [])

  async function fetchTodo() {
    const response = await api.get(`/todos/${todoId}`)

    setTodo(response.data)
  }

  const delay = ms => new Promise(res => setTimeout(res, ms));

  async function handleToggleTaskStatus(task_id, task_status) {
    try {
      await delay(1000)

      await api.put(`/todos/${todoId}/todo-tasks/${task_id}`, {
        status: task_status === 'DONE' ? 'WAITING' : 'DONE'
      })
    } catch (err) {
      toast.error('Não foi possível alterar o status')
    }

    await fetchTodo()
  }

  async function handleAddComment() {
    if (comment) {
      try {
        await api.post(`/todos/${todoId}/comments`, {
          comment
        })
      } catch (err) {
        toast.error('Não foi possível inserir o comentário')
      }

      await fetchTodo()
    }
  }

  return (
    <Container
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 1.5 }}
      bgColor={todo.category?.color}
    >
      <header>
        <BsArrowLeft onClick={() => navigate(-1)} />
        <BsThreeDots />
      </header>
      <h1>{todo?.title}</h1>
      <h3>{todo?.description}</h3>
      <Info>
        <BsCalendar4 />
        <time>
          {
            dayjs(todo?.deadline)
              .locale('pt-br')
              .format('DD [de] MMMM')
          }
        </time>
      </Info>
      <Info bgColor={todo.category?.color}>
        <AiOutlineTag />
        <button>
          {todo?.category?.title}
        </button>
      </Info>
      <Users>
        {
          todo?.users?.map(user => (
            <li key={user.id}>
              {user.name[0]}
            </li>
          ))
        }
        <button>
          <HiPlus />
        </button>
      </Users>
      <Info className='files'>
        <BsPaperclip />
        <p>Anexos</p>
      </Info>
      <Files>
        {
          todo?.files?.map(file => (
            <li key={file.id}>{file.file.split('-')[1]}</li>
          ))
        }
      </Files>
      <Hr />
      <Tasks>
        {
          todo?.tasks?.map(task => (
            <li key={task.id}>
              <Checkbox
                isChecked={task.status === 'DONE'}
                onCheck={() => handleToggleTaskStatus(task.id, task.status)}
                bgColor={lighten(0.4, todo?.category?.color)}
                borderColor='var(--gray-900)'
              />
              <span className={task.status === 'DONE' ? 'done' : ''}>{task.title}</span>
            </li>
          ))
        }
        <li>
          <MdOutlineSubdirectoryArrowRight />
          <button>Adicionar sub-tarefas</button>
        </li>
      </Tasks>
      <Hr />
      <Comments>
        <input
          value={comment}
          onChange={e => setComment(e.target.value)}
          placeholder='Adicionar comentário'
        />
        <button
          onClick={() => handleAddComment()}
        >
          <FaTelegramPlane />
        </button>
        <ul>
          {
            todo?.comments?.map(comment => (
              <li key={comment.id}>
                <div>{comment.user.name[0]}</div>
                <article>
                  <strong>{comment.user.name}</strong>
                  <p>{comment.comment}</p>
                </article>
              </li>
            ))
          }
        </ul>
      </Comments>
    </Container>
  )
}