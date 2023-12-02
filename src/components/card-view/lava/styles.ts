import styled from 'styled-components'

export const StContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fdc;

  h1 {
    z-index: 2;
  }
`

export const StBackground = styled.div<{ $image: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 0.75rem;
  background-image: url(${props => props.$image});
  background-position: bottom;
  background-size: cover;
  z-index: 1;
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
