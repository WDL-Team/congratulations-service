import { useCallback } from 'react'
import { StContainer, StTitle, particles } from './styles'
import type { TCardViewProps } from '..'
import { parseText } from '../parse'
import Particles from 'react-particles'
import { loadConfettiPreset } from 'tsparticles-preset-confetti'
import type { Engine } from 'tsparticles-engine'

export function CardConfetti(props: TCardViewProps) {
  const { name = '', text = '' } = props
  const arr = parseText(text)

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadConfettiPreset(engine)
  }, [])

  const options = {
    fullScreen: false,
    emitters: [
      {
        life: { duration: 5, count: 1 },
        position: { x: 0, y: 30 },
        particles: {
          move: { direction: 'top-right' },
        },
      },
      {
        life: { duration: 5, count: 1 },
        position: { x: 100, y: 30 },
        particles: {
          move: { direction: 'top-left' },
        },
      },
    ],
    preset: 'confetti',
  }

  return (
    <StContainer>
      <Particles style={particles} id="tsparticles" options={options} init={particlesInit} />
      <StTitle>
        <span>{name}</span>
      </StTitle>
      <div style={{ zIndex: 2 }}>{arr}</div>
    </StContainer>
  )
}
