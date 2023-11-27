import styled, { css, keyframes } from 'styled-components'
import bgImage from './assets/bg.svg'

const filter = {
  dark: css`
    background-blend-mode: color-burn;
    background-color: #348;
  `,
  light: css`
    background-blend-mode: luminosity;
    background-color: ${props => props.theme.colors.primary};
  `,
}

const shake = keyframes`
  0% {
    transform: translate(1px, -2px) rotate(-1deg);
  }
  10% {
    transform: translate(-1px, 2px) rotate(-1deg);
  }
  20% {
    transform: translate(1px, 2px) rotate(0deg);
  }
  30% {
    transform: translate(3px, 2px) rotate(0deg);
  }
  40% {
    transform: translate(1px, -1px) rotate(1deg);
  }
  50% {
    transform: translate(-1px, -2px) rotate(-1deg);
  }
  60% {
    transform: translate(-3px, 1px) rotate(0deg);
  }
  70% {
    transform: translate(3px, 1px) rotate(-1deg);
  }
  80% {
    transform: translate(-1px, -1px) rotate(1deg);
  }
  90% {
    transform: translate(-3px, 0px) rotate(1deg);
  }
  100% {
    transform: translate(1px, 1px) rotate(0deg);
  }
`

export const StContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center;
  ${props => filter[props.theme.name]};

  > div {
    width: fit-content;
  }
`
export const StTitle = styled.h1`
  display: flex;
  justify-content: center;

  span {
    animation: ${shake} 0.75s infinite;
  }
`

export const particles: Record<string, string> = {
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  zIndex: '0',
}
