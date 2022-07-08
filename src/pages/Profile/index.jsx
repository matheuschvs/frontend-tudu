import { useState } from 'react'
import { useEffect } from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { BsTrash } from 'react-icons/bs'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

import { useAuth } from '../../contexts/AuthContext'
import { api } from '../../services/api'

import { Container, Categories } from './styles'

export function Profile() {
  const [categories, setCategories] = useState([])
  const [removeStep, setRemoveStep] = useState(0)
  const [removeCategory, setRemoveCategory] = useState('')

  const { user } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    fetchCategories()
  }, [])

  async function fetchCategories() {
    const response = await api.get('/categories')

    setCategories(response.data)
  }

  async function handleRemoveCategory(category) {
    if (removeStep === 0) {
      toast.warning('Esta ação removerá todas as tarefas relacionadas a esta categoria')
      setRemoveStep(1)
      setRemoveCategory(category)
    } else {
      if (removeCategory === category) {
        await api.delete(`/categories/${category}`)

        toast.success('Categoria removida com sucesso!')

        await fetchCategories()
      } else {
        setRemoveCategory('')
      }
      setRemoveStep(0)
    }
  }

  function handleLogout() {
    localStorage.clear()
    navigate('/')
  }

  return (
    <Container>
      <header>
        <div>
          <AiOutlineUser />
        </div>
        <h1>{user?.name}</h1>
        <h2>{user?.email}</h2>
      </header>
      <h3>Minhas categorias:</h3>
      <Categories>
        {
          categories.map(category => (
            <li key={category.id}>
              <span>{category.title}</span>
              <button
                onClick={() => handleRemoveCategory(category.id)}
              >
                <BsTrash color={removeCategory === category.id ? 'red' : 'var(--blue-100)'} />
              </button>
            </li>
          ))
        }
      </Categories>
      <button
        onClick={() => handleLogout()}
      >
        deslogar
      </button>
    </Container>
  )
}