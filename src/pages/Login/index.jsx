import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc'
import { useNavigate } from 'react-router-dom'

import { useAuth } from '../../contexts/AuthContext'

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FormPage } from "../../components/FormPage";

import { Form, GoogleButton, RegisterLink } from './styles'

export function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn } = useAuth()
  const navigate = useNavigate()

  async function handleSubmit(event) {
    event.preventDefault()

    const data = {
      email,
      password
    }

    await signIn(data)

    navigate('/home', { replace: true })
  }

  return (
    <FormPage
      title='Entrar'
    >
      <Form onSubmit={handleSubmit}>
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
        <Button
          type='submit'
        >
          Entrar
        </Button>
        <GoogleButton
          type='button'
        >
          <FcGoogle />
          Entrar com o Google
        </GoogleButton>
      </Form>
      <RegisterLink
        to='/register'
      >
        Não tenho conta
      </RegisterLink>
    </FormPage>
  )
}