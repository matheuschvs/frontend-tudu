import { useEffect, useState } from 'react'
import { AiOutlineTag } from 'react-icons/ai'
import { BsCalendar4, BsPaperclip, BsPeople } from 'react-icons/bs'
import { HiPlus } from 'react-icons/hi'
import { FaTelegramPlane } from 'react-icons/fa'
import { FiChevronRight } from 'react-icons/fi'
import dayjs from 'dayjs'
import { SketchPicker } from 'react-color'
import { useNavigate } from 'react-router-dom'

import { api } from '../../services/api'

import {
  Header,
  Container,
  Trace,
  Data,
  Category,
  Hr,
  Tasks,
  SubmitButton
} from './styles'
import { toast } from 'react-toastify'

export function CreateTodo() {
  const [categories, setCategories] = useState([])

  const [formHidden, setFormHidden] = useState(true)

  const [members, setMembers] = useState([])
  const [files, setFiles] = useState([])
  const [tasks, setTasks] = useState([])
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [deadline, setDeadline] = useState('')
  const [category, setCategory] = useState('')
  const [color, setColor] = useState('#FFF')
  const [newCategory, setNewCategory] = useState('')
  const [email, setEmail] = useState('')
  const [file, setFile] = useState(null)
  const [task, setTask] = useState('')

  const navigate = useNavigate()

  useEffect(() => {
    fetchCategories()
  }, [])

  async function fetchCategories() {
    const response = await api.get('/categories')

    setCategories(response.data)
  }

  async function handleCreateCategory() {
    try {
      await api.post('/categories', {
        title: newCategory,
        color
      })

      await fetchCategories()

      toast.success('Categoria criada!')
    } catch (err) {
      toast.error('Erro ao criar categoria')
    }
  }

  async function handleAddToMembers() {
    try {
      const response = await api.get(`/users?email=${email}`)

      setMembers([...members, response.data.id])
      setEmail('')
      toast.success('Membro adicionado a fila')
    } catch (err) {
      toast.error('Usuário não encontrado')
    }
  }

  async function handleAddToFiles() {
    if (file) {
      setFiles([...files, file])
      setFile(null)
      toast.success('Arquivo adicionado a fila')
    }
  }

  async function handleAddToTasks() {
    if (task && !tasks.some(t => t === task)) {
      setTasks([...tasks, task])
      setTask(null)
      toast.success('Sub-tarefa adicionada a fila')
    }
  }

  async function handleCreateTodo() {
    let todoId

    try {
      const response = await api.post('/todos', {
        title,
        description,
        deadline,
        category_id: category
      })

      todoId = response.data.id
      toast.success('Tarefa criada com sucesso!')
    } catch (err) {
      toast.error('Falha ao criar tarefa')
    }

    if (!todoId) return

    const mPromises = members.map(
      async member => await api.post(`/todos/${todoId}/members`, {
        member_id: member
      }).catch(err => toast.error('Erro ao adicionar membro'))
    )

    const fPromises = files.map(
      async f => {
        const formData = new FormData()
        formData.append('todo_file', f)

        return await api.post(`/todos/${todoId}/files`, formData)
          .catch(err => toast.error('Erro ao adicionar arquivo'))
      }
    )

    const tPromises = tasks.map(
      async t => await api.post(`/todos/${todoId}/todo-tasks`, {
        title: t
      }).catch(err => toast.error('Erro ao adicionar task'))
    )

    const allPromises = [...tPromises, ...fPromises, ...mPromises]

    await Promise.all(allPromises)

    navigate(`/todos/${todoId}`)
  }

  return (
    <>
      <Header>
        <h1>Criar tarefa</h1>
      </Header>
      <Container
        animate={{ y: [2000, 1] }}
        transition={{ duration: 0.5 }}
      >
        <Trace />
        <Data>
          <input
            placeholder='Digite o título'
            onChange={e => setTitle(e.target.value)}
            value={title}
          />
          <input
            placeholder='Adicione uma descrição'
            onChange={e => setDescription(e.target.value)}
            value={description}
          />
          <div>
            <BsCalendar4 />
            <input
              placeholder='Inserir prazo'
              onChange={e => setDeadline(e.target.value)}
              value={deadline}
              type='date'
              min={dayjs(Date.now()).format('YYYY-MM-DD')}
            />
          </div>
          <Category formHidden={formHidden}>
            <AiOutlineTag />
            <select
              value={category}
              onChange={e => setCategory(e.target.value)}
            >
              <option value="" selected disabled hidden>
                Inserir categoria
              </option>
              {
                categories.map(category => (
                  <option
                    key={category.id}
                    value={category.id}
                  >
                    {category.title}
                  </option>
                ))
              }
            </select>
            <button
              type='button'
              onClick={() => setFormHidden(!formHidden)}
            >
              <HiPlus />
            </button>
            <form>
              <SketchPicker
                color={color}
                onChangeComplete={color => setColor(color.hex)}
              />
              <input
                value={newCategory}
                onChange={e => setNewCategory(e.target.value)}
                placeholder='Insira o nome da categoria'
              />
              <FaTelegramPlane
                onClick={() => handleCreateCategory()}
              />
            </form>
          </Category>
          <div>
            <BsPeople />
            <input
              type='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder='Adicionar membros - email'
            />
            <FiChevronRight
              color='var(--blue-800)'
              onClick={() => handleAddToMembers()}
            />
          </div>
          <div>
            <BsPaperclip />
            <input
              type='file'
              value={''}
              onChange={e => setFile(e.target.files[0])}
              placeholder='Inserir anexos'
            />
            <FiChevronRight
              color='var(--blue-800)'
              onClick={() => handleAddToFiles()}
            />
          </div>
          <Hr />
          <Tasks>
            <span></span>
            <input
              value={task}
              placeholder='sub-tarefa exemplo'
              onChange={e => setTask(e.target.value)}
            />
            <FiChevronRight
              color='var(--blue-800)'
              size={20}
              onClick={() => handleAddToTasks()}
            />
          </Tasks>
        </Data>

        <SubmitButton
          onClick={() => handleCreateTodo()}
        >
          Criar
        </SubmitButton>
      </Container>
    </>
  )
}