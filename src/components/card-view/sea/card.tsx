import React from 'react'
import { StContainer, StFish1, StFish2, StOctopos, particles } from './styles'
import type { TCardViewProps } from '..'
import { parseText } from '../parse'
import Particles from 'react-particles'
import { loadBubblesPreset } from 'tsparticles-preset-bubbles'
import type { Engine } from 'tsparticles-engine'
import fishesImg from './assets/fishes.svg'
import octoposImg from './assets/octopos.svg'

export function CardSea(props: TCardViewProps) {
  const { name = '', text = '' } = props
  const [fishes, setFishes] = React.useState([
    { top: 50, left: 100 },
    { top: 20, left: 40 },
    { top: -10, left: 0 },
  ])
  const ref = React.useRef<NodeJS.Timeout>()
  const arr = parseText(text)

  const particlesInit = React.useCallback(async (engine: Engine) => {
    await loadBubblesPreset(engine)
  }, [])

  const options = { fullScreen: false, background: { opacity: 0 }, preset: 'bubbles' }

  const updateFishes = React.useCallback(() => {
    setFishes(prev => {
      return [
        {
          top: prev[0].left > 100 ? Math.random() * 80 : prev[0].top,
          left: prev[0].left > 100 ? -10 : prev[0].left + 0.1,
        },
        {
          top: prev[1].left < -10 ? Math.random() * 80 : prev[1].top,
          left: prev[1].left < -10 ? 100 : prev[1].left - 0.1,
        },
        {
          top: prev[2].top < -10 ? 100 : prev[2].top - 0.1,
          left: prev[2].top < -10 ? Math.random() * 90 : prev[2].left - 0.03,
        },
      ]
    })
  }, [])

  React.useEffect(() => {
    ref.current = setInterval(updateFishes, 50)
    return () => clearTimeout(ref.current)
  }, [])

  return (
    <StContainer>
      <Particles style={particles} options={options} init={particlesInit} />
      <StFish1 src={fishesImg} alt="" style={{ top: fishes[0].top + '%', left: fishes[0].left + '%' }} />
      <StFish2 src={fishesImg} alt="" style={{ top: fishes[1].top + '%', left: fishes[1].left + '%' }} />
      <StOctopos src={octoposImg} alt="" style={{ top: fishes[2].top + '%', left: fishes[2].left + '%' }} />
      <h1>{name}</h1>
      <div style={{ zIndex: 2 }}>{arr}</div>
    </StContainer>
  )
}
