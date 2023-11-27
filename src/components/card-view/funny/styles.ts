import styled, { keyframes } from 'styled-components'

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
const move = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(0.5rem);
  }
`
export const StTitle = styled.h1`
  margin: 0%.5rem;

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
