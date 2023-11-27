import styled, { keyframes } from 'styled-components'

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

export const StContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > div {
    width: fit-content;
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
  span:nth-child(2) {
    animation-delay: 500ms;
  }
  span:nth-child(3) {
    animation-delay: 1s;
  }
  span:nth-child(4) {
    animation-delay: 1.5s;
  }
  span:nth-child(5) {
    animation-delay: 2s;
  }
  span:nth-child(6) {
    animation-delay: 2.5s;
  }
  span:nth-child(7) {
    animation-delay: 3s;
  }
  span:nth-child(8) {
    animation-delay: 3.5s;
  }
  span:nth-child(9) {
    animation-delay: 4s;
  }
  span:nth-child(10) {
    animation-delay: 4.5s;
  }
  span:nth-child(11) {
    animation-delay: 5s;
  }
  span:nth-child(12) {
    animation-delay: 5.5s;
  }
  span:nth-child(13) {
    animation-delay: 6s;
  }
  span:nth-child(14) {
    animation-delay: 6.5s;
  }
  span:nth-child(15) {
    animation-delay: 7s;
  }
  span:nth-child(16) {
    animation-delay: 7.5s;
  }
  span:nth-child(17) {
    animation-delay: 8s;
  }
  span:nth-child(18) {
    animation-delay: 8.5s;
  }
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
