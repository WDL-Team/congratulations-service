import styled, { css, keyframes } from 'styled-components'
import bgImage from './assets/bg.svg'

const filter = {
  dark: css`
    background-blend-mode: color-burn;
    background-color: #448;
  `,
  light: css`
    background-blend-mode: luminosity;
    background-color: ${props => props.theme.colors.primary};
  `,
}

const vawes = keyframes`
	0%,
	100% {
		clip-path: polygon(
			0% 45%,
			16% 44%,
			33% 50%,
			54% 60%,
			70% 61%,
			84% 59%,
			100% 52%,
			100% 100%,
			0% 100%
		);
	}

	50% {
		clip-path: polygon(
			0% 60%,
			15% 65%,
			34% 66%,
			51% 62%,
			67% 50%,
			84% 45%,
			100% 46%,
			100% 100%,
			0% 100%
		);
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
`

export const StTitle = styled.div`
  position: relative;
  height: 4em;
  width: 50%;

  & h1 {
    z-index: 2;
    font-size: 4em;
    margin: 0;
    position: absolute;
    bottom: 0;
  }

  & h1:nth-child(1) {
    color: transparent;
    -webkit-text-stroke: 2px ${props => props.theme.colors.accent};
  }

  & h1:nth-child(2) {
    color: ${props => props.theme.colors.text};
    animation: ${vawes} 4s infinite;
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
