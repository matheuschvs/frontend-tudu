import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

import { Container, Field } from "./styles";

export function Input({ type = 'text', ...rest }) {
  const [isHidden, setIsHidden] = useState(true)

  return (
    <Container>
      <Field
        type={type === 'password' && !isHidden ? 'text' : type}
        {...rest}
      />
      {type === 'password' &&
        (
          isHidden ?
            <AiOutlineEye onClick={() => setIsHidden(false)} /> :
            <AiOutlineEyeInvisible onClick={() => setIsHidden(true)} />
        )
      }
    </Container>
  )
}