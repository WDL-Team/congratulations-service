import { useCallback } from 'react'
import { StContainer, particles } from './styles'
import type { TCardViewProps } from '..'
import { parseText } from '../parse'
import { useSettings } from '@/context'
import type { ITheme } from '~/const/theme'
import Particles from 'react-particles'
import { loadSlim } from 'tsparticles-slim'
import type { Engine, RecursivePartial, IOptions } from 'tsparticles-engine'

export function CardSnow(props: TCardViewProps) {
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
    autoPlay: true,
    delay: 0,
    fullScreen: false,
    detectRetina: true,
    duration: 0,
    fpsLimit: 120,
    interactivity: {
      detectsOn: 'window',
      events: {
        onClick: {
          enable: true,
          mode: 'repulse',
        },
        onDiv: {
          selectors: [],
          enable: false,
          mode: [],
          type: 'circle',
        },
        onHover: {
          enable: true,
          mode: 'bubble',
          parallax: {
            enable: false,
            force: 2,
            smooth: 10,
          },
        },
        resize: {
          delay: 0.5,
          enable: true,
        },
      },
    },
    particles: {
      bounce: {
        horizontal: {
          random: {
            enable: false,
            minimumValue: 0.1,
          },
          value: 1,
        },
        vertical: {
          random: {
            enable: false,
            minimumValue: 0.1,
          },
          value: 1,
        },
      },
      collisions: {
        absorb: {
          speed: 2,
        },
        bounce: {
          horizontal: {
            random: {
              enable: false,
              minimumValue: 0.1,
            },
            value: 1,
          },
          vertical: {
            random: {
              enable: false,
              minimumValue: 0.1,
            },
            value: 1,
          },
        },
        enable: false,
        maxSpeed: 50,
        mode: 'bounce',
        overlap: {
          enable: true,
          retries: 0,
        },
      },
      color: {
        value: theme.colors.invert,
        animation: {
          h: {
            count: 0,
            enable: false,
            offset: 0,
            speed: 1,
            delay: 0,
            decay: 0,
            sync: true,
          },
          s: {
            count: 0,
            enable: false,
            offset: 0,
            speed: 1,
            delay: 0,
            decay: 0,
            sync: true,
          },
          l: {
            count: 0,
            enable: false,
            offset: 0,
            speed: 1,
            delay: 0,
            decay: 0,
            sync: true,
          },
        },
      },
      groups: {},
      move: {
        angle: {
          offset: 0,
          value: 90,
        },
        attract: {
          distance: 200,
          enable: false,
          rotate: {
            x: 600,
            y: 1200,
          },
        },
        center: {
          x: 50,
          y: 50,
          mode: 'percent',
          radius: 0,
        },
        decay: 0,
        distance: {},
        direction: 'bottom',
        drift: 0,
        enable: true,
        gravity: {
          acceleration: 9.81,
          enable: false,
          inverse: false,
          maxSpeed: 50,
        },
        path: {
          clamp: true,
          delay: {
            random: {
              enable: false,
              minimumValue: 0,
            },
            value: 0,
          },
          enable: false,
          options: {},
        },
        outModes: {
          default: 'out',
          bottom: 'out',
          left: 'out',
          right: 'out',
          top: 'out',
        },
        random: false,
        size: false,
        speed: 2,
        spin: {
          acceleration: 0,
          enable: false,
        },
        straight: false,
        trail: {
          enable: false,
          length: 10,
          fill: {},
        },
        vibrate: false,
        warp: false,
      },
      number: {
        density: {
          enable: true,
          width: 1920,
          height: 1080,
        },
        limit: 0,
        value: 400,
      },
      opacity: {
        random: {
          enable: true,
          minimumValue: 0.1,
        },
        value: {
          min: 0.1,
          max: 0.5,
        },
        animation: {
          count: 0,
          enable: false,
          speed: 1,
          decay: 0,
          delay: 0,
          sync: false,
          mode: 'auto',
          startValue: 'random',
          destroy: 'none',
          minimumValue: 0.1,
        },
      },
      reduceDuplicates: false,
      shadow: {
        blur: 0,
        color: {
          value: '#000',
        },
        enable: false,
        offset: {
          x: 0,
          y: 0,
        },
      },
      shape: {
        close: true,
        fill: true,
        options: {},
        type: 'circle',
      },
      size: {
        random: {
          enable: true,
          minimumValue: 1,
        },
        value: {
          min: 1,
          max: 10,
        },
        animation: {
          count: 0,
          enable: false,
          speed: 40,
          decay: 0,
          delay: 0,
          sync: false,
          mode: 'auto',
          startValue: 'random',
          destroy: 'none',
          minimumValue: 0.1,
        },
      },
      stroke: {
        width: 0,
      },
      zIndex: {
        random: {
          enable: false,
          minimumValue: 0,
        },
        value: 0,
        opacityRate: 1,
        sizeRate: 1,
        velocityRate: 1,
      },
      destroy: {
        bounds: {},
        mode: 'none',
        split: {
          count: 1,
          factor: {
            random: {
              enable: false,
              minimumValue: 0,
            },
            value: 3,
          },
          rate: {
            random: {
              enable: false,
              minimumValue: 0,
            },
            value: {
              min: 4,
              max: 9,
            },
          },
          sizeOffset: true,
          particles: {},
        },
      },
      roll: {
        darken: {
          enable: false,
          value: 0,
        },
        enable: false,
        enlighten: {
          enable: false,
          value: 0,
        },
        mode: 'vertical',
        speed: 25,
      },
      tilt: {
        random: {
          enable: false,
          minimumValue: 0,
        },
        value: 0,
        animation: {
          enable: false,
          speed: 0,
          decay: 0,
          sync: false,
        },
        direction: 'clockwise',
        enable: false,
      },
      twinkle: {
        lines: {
          enable: false,
          frequency: 0.05,
          opacity: 1,
        },
        particles: {
          enable: false,
          frequency: 0.05,
          opacity: 1,
        },
      },
      wobble: {
        distance: 5,
        enable: false,
        speed: {
          angle: 50,
          move: 10,
        },
      },
      life: {
        count: 0,
        delay: {
          random: {
            enable: false,
            minimumValue: 0,
          },
          value: 0,
          sync: false,
        },
        duration: {
          random: {
            enable: false,
            minimumValue: 0.0001,
          },
          value: 0,
          sync: false,
        },
      },
      rotate: {
        random: {
          enable: false,
          minimumValue: 0,
        },
        value: 0,
        animation: {
          enable: false,
          speed: 0,
          decay: 0,
          sync: false,
        },
        direction: 'clockwise',
        path: false,
      },
      orbit: {
        animation: {
          count: 0,
          enable: false,
          speed: 1,
          decay: 0,
          delay: 0,
          sync: false,
        },
        enable: false,
        opacity: 1,
        rotation: {
          random: {
            enable: false,
            minimumValue: 0,
          },
          value: 45,
        },
        width: 1,
      },
    },
    pauseOnBlur: true,
    pauseOnOutsideViewport: true,
    zLayers: 100,
    motion: {
      disable: false,
      reduce: {
        factor: 4,
        value: true,
      },
    },
  } as RecursivePartial<IOptions>
}
