import { Router } from './routes'
import { GlobalStyle } from './styles/GlobalStyle'
import { AuthProvider } from './contexts/AuthContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export function App() {
  return (
    <>
      <AuthProvider>
        <Router />
        <GlobalStyle />
        <ToastContainer />
      </AuthProvider>
    </>
  )
}

