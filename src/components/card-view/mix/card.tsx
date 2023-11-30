import { useCallback } from 'react'
import { StContainer, StTitle, particles } from './styles'
import type { TCardViewProps } from '..'
import { parseText } from '../parse'
import { useSettings } from '@/context'
import type { ITheme } from '~/const/theme'
import Particles from 'react-particles'
import { loadSlim } from 'tsparticles-slim'
import type { Engine, RecursivePartial, IOptions } from 'tsparticles-engine'
import bgImage from './assets/vawes.svg'
import apple from './assets/apple.png'
import candy1 from './assets/candy1.png'
import candy2 from './assets/candy2.png'
import conf1 from './assets/conf1.png'
import conf2 from './assets/conf2.png'
import gift from './assets/gift.png'
import heart from './assets/heart.png'
import orange from './assets/orange.png'
import star from './assets/star.png'

export function CardMix(props: TCardViewProps) {
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
      <StTitle>
        {name.split('').map((chr, i) => (
          <span key={i}>{chr}</span>
        ))}
      </StTitle>
      <div style={{ zIndex: 2 }}>{arr}</div>
    </StContainer>
  )
}

const getOptions = (theme: ITheme) => {
  return {
    autoPlay: true,
    background: {
      color: {
        value: theme.colors.primary,
      },
      image: `url(${bgImage})`,
      position: '50% 50%',
      repeat: 'no-repeat',
      size: 'cover',
      opacity: 1,
    },
    defaultThemes: {},
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
          mode: 'push',
        },
        onDiv: {
          selectors: '#repulse-div',
          enable: false,
          mode: 'repulse',
          type: 'circle',
        },
        onHover: {
          enable: true,
          mode: 'bubble',
          parallax: {
            enable: false,
            force: 60,
            smooth: 10,
          },
        },
        resize: {
          delay: 0.5,
          enable: true,
        },
      },
      modes: {
        trail: {
          delay: 1,
          pauseOnStop: false,
          quantity: 1,
        },
        attract: {
          distance: 200,
          duration: 0.4,
          easing: 'ease-out-quad',
          factor: 1,
          maxSpeed: 50,
          speed: 1,
        },
        bounce: {
          distance: 200,
        },
        bubble: {
          distance: 400,
          duration: 2,
          mix: false,
          opacity: 0.8,
          size: 40,
          divs: {
            distance: 200,
            duration: 0.4,
            mix: false,
            selectors: [],
          },
        },
        connect: {
          distance: 80,
          links: {
            opacity: 0.5,
          },
          radius: 60,
        },
        grab: {
          distance: 400,
          links: {
            blink: false,
            consent: false,
            opacity: 1,
          },
        },
        push: {
          default: true,
          groups: [],
          quantity: 4,
        },
        remove: {
          quantity: 2,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
          factor: 100,
          speed: 1,
          maxSpeed: 50,
          easing: 'ease-out-quad',
          divs: {
            distance: 200,
            duration: 0.4,
            factor: 100,
            speed: 1,
            maxSpeed: 50,
            easing: 'ease-out-quad',
            selectors: [],
          },
        },
        slow: {
          factor: 3,
          radius: 200,
        },
        light: {
          area: {
            gradient: {
              start: {
                value: '#ffffff',
              },
              stop: {
                value: '#000000',
              },
            },
            radius: 1000,
          },
          shadow: {
            color: {
              value: '#000000',
            },
            length: 2000,
          },
        },
      },
    },
    manualParticles: [],
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
        value: '#ffffff',
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
        direction: 'none',
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
        value: 80,
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
        options: {
          character: {
            fill: false,
            font: 'Verdana',
            style: '',
            value: '*',
            weight: '400',
          },
          char: {
            fill: false,
            font: 'Verdana',
            style: '',
            value: '*',
            weight: '400',
          },
          polygon: {
            sides: 5,
          },
          star: {
            sides: 5,
          },
          image: [
            {
              src: apple,
              width: 64,
              height: 64,
            },
            {
              src: candy1,
              width: 64,
              height: 64,
            },
            {
              src: candy2,
              width: 64,
              height: 64,
            },
            {
              src: conf1,
              width: 64,
              height: 64,
            },
            {
              src: conf2,
              width: 64,
              height: 64,
            },
            {
              src: gift,
              width: 64,
              height: 64,
            },
            {
              src: heart,
              width: 64,
              height: 64,
            },
            {
              src: orange,
              width: 64,
              height: 64,
            },
            {
              src: star,
              width: 64,
              height: 64,
            },
          ],
        },
        type: 'image',
      },
      size: {
        random: {
          enable: false,
          minimumValue: 1,
        },
        value: 16,
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
        color: {
          value: '#000000',
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
          enable: true,
          minimumValue: 0,
        },
        value: 0,
        animation: {
          enable: true,
          speed: 5,
          decay: 0,
          sync: false,
        },
        direction: 'random',
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
      links: {
        blink: false,
        color: {
          value: '#000',
        },
        consent: false,
        distance: 150,
        enable: false,
        frequency: 1,
        opacity: 0.4,
        shadow: {
          blur: 5,
          color: {
            value: '#000',
          },
          enable: false,
        },
        triangles: {
          enable: false,
          frequency: 1,
        },
        width: 1,
        warp: false,
      },
      repulse: {
        random: {
          enable: false,
          minimumValue: 0,
        },
        value: 0,
        enabled: false,
        distance: 1,
        duration: 1,
        factor: 1,
        speed: 1,
      },
    },
    pauseOnBlur: true,
    pauseOnOutsideViewport: true,
    responsive: [],
    smooth: false,
    style: {},
    themes: [],
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
