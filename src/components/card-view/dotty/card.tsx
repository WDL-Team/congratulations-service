import { useCallback } from 'react'
import { StContainer, particles } from './styles'
import type { TCardViewProps } from '..'
import { parseText } from '../parse'
import { useSettings } from '@/context'
import type { ITheme } from '~/const/theme'
import Particles from 'react-particles'
import { loadSlim } from 'tsparticles-slim'
import type { Engine, RecursivePartial, IOptions } from 'tsparticles-engine'

export function CardDotty(props: TCardViewProps) {
  const { name = '', text = '' } = props
  const arr = parseText(text)
  const { theme } = useSettings()

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  const options = getOptions(theme)

  return (
    <StContainer>
      <Particles style={particles} id="tsparticles" options={options} init={particlesInit} />
      <h1 style={{ zIndex: 2 }}>{name}</h1>
      <div style={{ zIndex: 2 }}>{arr}</div>
    </StContainer>
  )
}

const getOptions = (theme: ITheme) => {
  return {
    fullScreen: false,
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: 'push',
        },
        onHover: {
          enable: true,
          mode: 'repulse',
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: theme.colors.accent,
      },
      links: {
        color: theme.colors.accent,
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: {
          default: 'bounce',
        },
        random: false,
        speed: 6,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  } as RecursivePartial<IOptions>
}
