import styled from 'styled-components'
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
