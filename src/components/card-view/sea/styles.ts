import styled, { css, keyframes, RuleSet } from 'styled-components'
import bgImage from './assets/sea.svg'

const anim_name_appear = keyframes`
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
const anim_text_appear = keyframes`
  from{
      transform: translateY(2rem);
      filter: blur(5px);
      opacity: 0;
  }to{
      filter: blur(0);
      opacity: 1;
  }
`
const anim_text_delay: RuleSet[] = new Array(15).fill('').map(
  (_, i) => css`
    p:nth-child(${i + 1}) {
      animation-delay: ${i * 0.5}s;
    }
  `
)
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
    animation: ${anim_name_appear} 2s;
    text-align: center;
  }
  p {
    opacity: 0;
    animation: ${anim_text_appear} 1s forwards;
  }
  ${anim_text_delay}
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
