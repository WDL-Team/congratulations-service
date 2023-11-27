import styled from 'styled-components'
import bgImage from './assets/balloons.svg'

export const StContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${bgImage});
  background-position: right;
  background-repeat: no-repeat;
  background-size: contain;

  > h1 {
    background: linear-gradient(${({ theme }) => theme.colors.text}, ${({ theme }) => theme.colors.accent});
    background-clip: text;
    color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  > div {
    width: fit-content;
  }
`
