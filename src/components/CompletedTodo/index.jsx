import { Link } from 'react-router-dom'

import { Checkbox } from '../Checkbox'
import { Container } from './styles'

export function CompletedTodo({ todoId, isChecked, title, description, onCheck, bgColor }) {
  return (
    <Container bgColor={bgColor}>
      <Checkbox
        isChecked={isChecked}
        onCheck={onCheck}
        bgColor='#FFF'
        borderColor='var(--gray-800)'
      />
      <div>
        <Link to={`/todos/${todoId}`}>
          <h3>{title}</h3>
        </Link>
        <p>{description}</p>
      </div>
    </Container>
  )
}