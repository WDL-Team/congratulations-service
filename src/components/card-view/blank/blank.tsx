import { StContainer } from './styles'
import type { TCardViewProps } from '..'

export function CardBlank(props: TCardViewProps) {
  const { name = '', text = '' } = props

  return (
    <StContainer>
      <h1>{name}</h1>
      <p>{text}</p>
    </StContainer>
  )
}
