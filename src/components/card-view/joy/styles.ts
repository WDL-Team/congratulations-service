import styled, { css, keyframes, RuleSet } from 'styled-components'
import bgImage from './assets/bg.svg'

const move = keyframes`
  from {
    transform: translateX(5rem);
    opacity: 0;
    filter: blur(5px);
  }
  to {
    transform: translateX(0);
    opacity: 1;
    filter: blur(0);
  }
`
const anim_delay: RuleSet[] = new Array(18).fill('').map(
  (_, i) => css`
    span:nth-child(${i}) {
      animation-delay: ${i * 0.5}s;
    }
  `
)
export const StContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${bgImage});
  background-position: center;
  background-size: cover;

  > div {
    z-index: 2;
    width: fit-content;
    animation: ${move} 500ms linear forwards;
  }
`
export const StTitle = styled.h1`
  margin: 0.5rem;

  span {
    opacity: 0;
    display: inline-block;
    animation: ${move} 500ms linear forwards;
    white-space: pre;
  }
  ${anim_delay}
`
