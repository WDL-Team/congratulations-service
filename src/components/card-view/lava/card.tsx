import { useCallback } from 'react'
import { StContainer, StBackground, particles } from './styles'
import type { TCardViewProps } from '..'
import { parseText } from '../parse'
import Particles from 'react-particles'
import { loadFirePreset } from 'tsparticles-preset-fire'
import type { Engine } from 'tsparticles-engine'
import bgImage from './assets/lava.svg'

export function CardLava(props: TCardViewProps) {
  const { name = '', text = '' } = props
  const arr = parseText(text)

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFirePreset(engine)
  }, [])

  const options = {
    fullScreen: false,
    preset: 'fire',
  }

  return (
    <StContainer>
      <Particles style={particles} id="tsparticles" options={options} init={particlesInit} />
      <StBackground $image={bgImage} />
      <h1>{name}</h1>
      <div style={{ zIndex: 2 }}>{arr}</div>
    </StContainer>
  )
}
