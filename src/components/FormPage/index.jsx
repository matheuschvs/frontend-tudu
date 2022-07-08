import {
  Container,
  Trace
} from "./styles";

export function FormPage({ children, title }) {
  return (
    <Container
      animate={{ y: [2000, 1] }}
      transition={{ duration: 0.5 }}
    >
      <Trace />
      <h1>{title}</h1>
      {children}
    </Container>
  )
}