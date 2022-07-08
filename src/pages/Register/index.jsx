import { useState } from 'react';
import { toast } from 'react-toastify';
import { FcGoogle } from 'react-icons/fc'
import { useNavigate } from 'react-router-dom'

import { api } from '../../services/api';

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FormPage } from "../../components/FormPage";

import { Form, GoogleButton, LoginLink } from './styles'

export function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const navigate = useNavigate()

  async function handleSignUp(event) {
    event.preventDefault()

    try {
      if (password && password !== confirmPassword) {
        throw new Error('Passwords does not match')
      }

      const data = {
        name,
        email,
        password
      }

      await api.post('/users', data)

      toast.success('Cadastrado com sucesso!')
      navigate('/login', { replace: true })
    } catch (err) {
      toast.error('Erro ao tentar cadastrar')
    }
  }

  return (
    <FormPage
      title='Cadastrar'
    >
      <Form onSubmit={handleSignUp}>
        <Input
          placeholder='Nome'
          onChange={e => setName(e.target.value)}
          value={name}
        />
        <Input
          placeholder='E-mail'
          onChange={e => setEmail(e.target.value)}
          value={email}
        />
        <Input
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder='Senha'
          type='password'
        />
        <Input
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
          placeholder='Repetir senha'
          type='password'
        />
        <Button
          type='submit'
        >
          Cadastrar
        </Button>
        <GoogleButton
          type='button'
        >
          <FcGoogle />
          Cadastrar com o Google
        </GoogleButton>
      </Form>
      <LoginLink
        to='/login'
      >
        Já tenho conta
      </LoginLink>
    </FormPage>
  )
}