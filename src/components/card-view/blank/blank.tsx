import { StContainer } from './styles'
import type { TCardViewProps } from '..'
import { parseText } from '../parse'

export function CardBlank(props: TCardViewProps) {
  const { name = '', text = '' } = props
  const arr = parseText(text)

  return (
    <StContainer>
      <h1>{name}</h1>
      <div>{arr}</div>
    </StContainer>
  )
}
