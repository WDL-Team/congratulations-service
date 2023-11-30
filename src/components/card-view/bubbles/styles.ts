import styled, { keyframes } from 'styled-components'

const anim_appears = keyframes`
  from{
      letter-spacing: 2rem;
      filter: blur(5px);
      opacity: 0;
  }to{
      letter-spacing: 0;
      filter: blur(0);
      opacity: 1;
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

  h1 {
    animation: ${anim_appears} 2s;
    text-align: center;
  }

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
