import styled, { css, keyframes, RuleSet } from 'styled-components'

const move = keyframes`
  from {
    opacity: 1;
    transform: translateY(100vh);
    font-size: 5px;
    color: #f00;
  }
  to {
    opacity: 1;
    transform: translateY(0);
    font-size: 1em;
    color: #fff;
  }
`
const anim_delay: RuleSet[] = new Array(18).fill('').map(
  (_, i) => css`
    span:nth-child(${i + 1}) {
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
  overflow: hidden;

  > div {
    width: fit-content;
  }
`
export const StTitle = styled.h1`
  z-index: 2;
  span {
    opacity: 0;
    display: inline-block;
    animation: ${move} 2s ease-in forwards;
    white-space: pre;
  }
  ${anim_delay}
`

export const particles: Record<string, string> = {
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  zIndex: '0',
  borderRadius: '0.75rem',
}
