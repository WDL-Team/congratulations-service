import styled, { css, keyframes, RuleSet } from 'styled-components'
import { TThemeVariants } from '~/types/settings'
import bgImage from './assets/bg.svg'

const filter: Record<TThemeVariants, RuleSet> = {
  dark: css``,
  light: css`
    background-blend-mode: color-dodge;
    background-color: #993;
  `,
}

const animation_1 = keyframes`
	0% {
    opacity: 0;
    transform: translateY(2rem);
  }
  40%{
    opacity: 1;
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

const animation_2 = keyframes`
	0% {
    opacity: 0;
    transform: translateX(-4rem);
  }
  40%{
    opacity: 1;
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`

export const StContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center;
  ${props => filter[props.theme.name]};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > div {
    width: fit-content;
  }

  > h1 {
    animation: ${animation_1} 1.2s ease-in;
  }

  & p {
    opacity: 0;
    animation: ${animation_2} 0.8s forwards;
  }
  & p:nth-child(1) {
    animation-delay: 1s;
  }
  & p:nth-child(2) {
    animation-delay: 1.5s;
  }
  & p:nth-child(3) {
    animation-delay: 2s;
  }
  & p:nth-child(4) {
    animation-delay: 2.5s;
  }
  & p:nth-child(5) {
    animation-delay: 3s;
  }
  & p:nth-child(6) {
    animation-delay: 3.5s;
  }
  & p:nth-child(7) {
    animation-delay: 4s;
  }
  & p:nth-child(8) {
    animation-delay: 4.5s;
  }
  & p:nth-child(9) {
    animation-delay: 5s;
  }
`
