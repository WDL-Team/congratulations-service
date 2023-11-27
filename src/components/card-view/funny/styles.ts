import styled, { keyframes } from 'styled-components'
import bgImage from './assets/funny.svg'

const move = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(0.5rem);
  }
`
const hue = keyframes`
  from {
    -webkit-filter: hue-rotate(0deg);
  }
  to {
    -webkit-filter: hue-rotate(-360deg);
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
  background-position: center;
  background-size: cover;

  div {
    font-family: cursive;
    width: fit-content;
    background-image: -webkit-linear-gradient(92deg, #28c76f, #0396ff);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: ${hue} 10s infinite linear;
    -webkit-animation: ${hue} 10s infinite linear;
  }
`

export const StTitle = styled.h1`
  margin: 0.5rem;

  span {
    text-transform: uppercase;
    font-weight: bold;
    display: inline-block;
    animation: ${move} 2s ease-in-out infinite;
    white-space: pre;
  }
  span:nth-child(2n) {
    animation-delay: 0.1s;
    color: ${({ theme }) => theme.colors.accent};
  }
  span:nth-child(2n + 1) {
    animation-delay: 0.3s;
    background: linear-gradient(${({ theme }) => theme.colors.text}, ${({ theme }) => theme.colors.accent});
    background-clip: text;
    color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`
