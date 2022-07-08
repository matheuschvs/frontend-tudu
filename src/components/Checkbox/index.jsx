import { useState } from "react";
import { IoMdCheckmark } from 'react-icons/io'

import { Container } from "./styles";

export function Checkbox({
  isChecked = false,
  onCheck,
  bgColor,
  borderColor
}) {
  const [checked, setChecked] = useState(isChecked)

  return (
    <Container
      onClick={() => {
        onCheck()
        setChecked(!checked)
      }}
      bgColor={bgColor}
      borderColor={borderColor}
    >
      {checked && <IoMdCheckmark />}
    </Container>
  )
}