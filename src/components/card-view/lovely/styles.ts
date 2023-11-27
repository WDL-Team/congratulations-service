import styled from 'styled-components'

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

export const particles: Record<string, string> = {
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  zIndex: '0',
  borderRadius: '0.75rem',
}
