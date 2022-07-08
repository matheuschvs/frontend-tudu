import { Link } from 'react-router-dom'

import { Container, ProgressBar } from './styles'

export function InProgressTodo({ todoId, title, description, bgColor, percent }) {
  return (
    <Container bgColor={bgColor}>
      <Link to={`/todos/${todoId}`}>
        <h3>{title.split(' ')[0]}</h3>
      </Link>
      <p>{description}</p>
      <b>{percent}</b>
      <ProgressBar percent={percent} bgColor={bgColor}>
        <div></div>
      </ProgressBar>
    </Container>
  )
}