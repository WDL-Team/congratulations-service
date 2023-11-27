import styled, { css } from 'styled-components'
import { CardView } from '.'

const src = './src/assets/thumb/'
const cardNames = Object.keys(CardView)
  .filter(k => !Number.isFinite(Number(k)))
  .map(n => (n === 'Blank' ? '' : `/${n.toLowerCase()}.png`))

export const Thumbnails = ({ select }: { select: HTMLSelectElement | null }) => {
  console.log('Thumb: ', select)
  return (
    <StContainer>
      {cardNames.map((url, i) => (
        <StThumb key={i} $url={url} onClick={() => console.log(select, i)} />
      ))}
    </StContainer>
  )
}

const StContainer = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
`
const StThumb = styled.div<{ $url: string }>`
  border-radius: 0.75rem;
  flex-grow: 1;
  aspect-ratio: 19/10;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  cursor: pointer;
  ${props =>
    props.$url &&
    css<{ $url: string }>`
      background-image: url(${src}${({ theme }) => theme.name}${props => props.$url});
      background-position: center;
      background-size: 110%;
      transition: all 200ms ease-in-out;
    `}

  &:hover {
    background-size: 100%;
    border-color: ${({ theme }) => theme.colors.accent};
  }
`
