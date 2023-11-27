import { StContainer, StTitle } from './styles'
import type { TCardViewProps } from '..'
import { parseText } from '../parse'

export function CardFunny(props: TCardViewProps) {
  const { name = '', text = '' } = props
  const arr = parseText(text)

  return (
    <StContainer>
      <StTitle>
        {name.split('').map((chr, i) => (
          <span key={i}>{chr}</span>
        ))}
      </StTitle>
      <div>{arr}</div>
    </StContainer>
  )
}
