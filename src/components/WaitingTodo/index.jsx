import { lighten } from 'polished'
import { Link } from 'react-router-dom'

import { Checkbox } from '../Checkbox'
import { Container } from './styles'

export function WaitingTodo({ todoId, title, description, onCheck, bgColor }) {
  return (
    <Container
      animate={{ x: [-1000, 1] }}
      transition={{ duration: 0.5 }}
      bgColor={bgColor}
    >
      <Checkbox
        onCheck={onCheck}
        bgColor={lighten(0.2, bgColor)}
        borderColor='#FFF'
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