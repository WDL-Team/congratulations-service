import { useCallback } from 'react'
import { StContainer, StTitle, particles } from './styles'
import type { TCardViewProps } from '..'
import { parseText } from '../parse'
import Particles from 'react-particles'
import { loadFireworksPreset } from 'tsparticles-preset-fireworks'
import type { Engine } from 'tsparticles-engine'

export function CardFireworks(props: TCardViewProps) {
  const { name = '', text = '' } = props
  const arr = parseText(text)

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFireworksPreset(engine)
  }, [])

  const options = {
    fullScreen: false,
    preset: 'fireworks',
    sounds: false,
  }

  return (
    <StContainer>
      <Particles style={particles} options={options} init={particlesInit} />
      <StTitle>
        {name.split('').map((chr, i) => (
          <span key={i}>{chr}</span>
        ))}
      </StTitle>
      <div style={{ zIndex: 2 }}>{arr}</div>
    </StContainer>
  )
}
