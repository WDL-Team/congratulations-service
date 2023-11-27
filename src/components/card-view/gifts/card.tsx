import { StContainer, StTitle } from './styles'
import type { TCardViewProps } from '..'
import { parseText } from '../parse'

export function CardGifts(props: TCardViewProps) {
  const { name = '', text = '' } = props
  const arr = parseText(text)

  return (
    <StContainer>
      <StTitle>
        {name.split('').map((chr, i) => (
          <b key={i}>{chr}</b>
        ))}
      </StTitle>
      <div>{arr}</div>
    </StContainer>
  )
}
