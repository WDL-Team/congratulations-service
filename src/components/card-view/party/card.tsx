import React from 'react'
import { StContainer, StBalloon } from './styles'
import type { TCardViewProps } from '..'
import { parseText } from '../parse'
import balloon1 from './assets/balloon1.svg'
import balloon2 from './assets/balloon2.svg'

const DELTA = 0.5

export function CardParty(props: TCardViewProps) {
  const { name = '', text = '' } = props
  const arr = parseText(text)
  const ref = React.useRef<NodeJS.Timeout>()
  const [pos, setPos] = React.useState([
    { top: -10, left: 0 },
    { top: 40, left: 70 },
  ])

  const updateFishes = React.useCallback(() => {
    setPos(prev =>
      prev.map(p => ({
        top: p.top < -20 ? 100 : p.top - DELTA,
        left: p.top < -20 ? Math.random() * 80 + 10 : p.left,
      }))
    )
  }, [])

  React.useEffect(() => {
    ref.current = setInterval(updateFishes, 50)
    return () => clearTimeout(ref.current)
  }, [])

  return (
    <StContainer>
      <h1>{name}</h1>
      <div style={{ zIndex: 2 }}>{arr}</div>
      <StBalloon src={balloon1} alt="" style={{ top: pos[0].top + '%', left: pos[0].left + '%' }} />
      <StBalloon src={balloon2} alt="" style={{ top: pos[1].top + '%', left: pos[1].left + '%' }} />
    </StContainer>
  )
}
