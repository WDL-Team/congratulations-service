import styled from 'styled-components'
import bgImg from './assets/party.svg'

export const StContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${bgImg});
  background-position: bottom;
  background-size: cover;
  overflow: hidden;

  h1 {
    z-index: 2;
  }
`
export const StBalloon = styled.img`
  position: absolute;
  width: 10%;
`
