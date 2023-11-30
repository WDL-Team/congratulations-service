import styled, { keyframes } from 'styled-components'
import bgImage from './assets/gifts.svg'

export const StContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${bgImage});
  background-position: 0 100%;
  background-repeat: no-repeat;
  background-size: 75%;

  > div {
    width: fit-content;
  }
`

const getup = keyframes`
  from {
      transform: rotateX(-85deg);
   }
   to {
      transform: rotateX(0);
   }
`

export const StTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
  letter-spacing: 3px;
  font-size: 3.5rem;
  font-weight: 700;
  position: relative;
  transform-style: preserve-3d;
  perspective: 100px;
  -webkit-transform-style: preserve-3d;
  -webkit-perspective: 100px;

  > b {
    white-space: pre;
    background: linear-gradient(${({ theme }) => theme.colors.text}, ${({ theme }) => theme.colors.accent});
    background-clip: text;
    color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transform-origin: bottom;
    transform: rotateX(-85deg);
    -webkit-transform-origin: bottom;
    -webkit-transform: rotateX(-85deg);
    animation: ${getup} 4s forwards;
  }

  > b:nth-child(2) {
    animation-delay: 0.25s;
  }
  > b:nth-child(3) {
    animation-delay: 0.5s;
  }
  > b:nth-child(4) {
    animation-delay: 0.75s;
  }
  > b:nth-child(5) {
    animation-delay: 1s;
  }
  > b:nth-child(6) {
    animation-delay: 1.25s;
  }
  > b:nth-child(7) {
    animation-delay: 1.5s;
  }
  > b:nth-child(8) {
    animation-delay: 1.75s;
  }
  > b:nth-child(9) {
    animation-delay: 2s;
  }
`
