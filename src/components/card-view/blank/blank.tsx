import { StContainer } from './styles'
import type { TCardViewProps } from '..'

export function CardBlank(props: TCardViewProps) {
  const { name = '', text = '' } = props
  const arr = text.split('\n').map((str, id) => <p key={`p_${id}`}>{str || '\u00A0'}</p>)

  return (
    <StContainer>
      <h1>{name}</h1>
      <div>{arr}</div>
    </StContainer>
  )
}
