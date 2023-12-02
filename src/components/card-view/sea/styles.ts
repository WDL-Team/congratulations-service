import styled from 'styled-components'
import bgImage from './assets/sea.svg'

export const StContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${bgImage});
  background-position: bottom;
  background-size: cover;
  color: #143c59;
  overflow: hidden;

  h1 {
    z-index: 2;
  }
`

export const StFish1 = styled.img`
  position: absolute;
  width: 15%;
`
export const StFish2 = styled.img`
  position: absolute;
  width: 15%;
  transform: scaleX(-1);
`
export const StOctopos = styled.img`
  position: absolute;
  width: 15%;
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
