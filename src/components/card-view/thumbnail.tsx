import styled, { css } from 'styled-components'
import { CardView } from '.'

// const src = import.meta.env.PROD ? './assets/thumb/' : './public/assets/thumb/'
const src = './assets/thumb/'
const cardNames = Object.keys(CardView).filter(k => !Number.isFinite(Number(k)))

const getUrl = (name: string) => `/${name.toLowerCase()}.png`

type TProps = {
  refSelect: React.RefObject<HTMLSelectElement | null>
  onChange?: (arg: HTMLSelectElement) => void
}

export const Thumbnails = ({ refSelect, onChange }: TProps) => {
  const clickHandler = (i: number) => {
    // console.log(refSelect, i)
    if (refSelect.current) {
      refSelect.current.value = String(i)
      if (onChange) onChange(refSelect.current)
    }
  }

  return (
    <StContainer>
      {cardNames.map((name, i) => (
        <StThumb key={i} $name={name} onClick={() => clickHandler(i)} title={name} />
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
const StThumb = styled.div<{ $name: string }>`
  border-radius: 0.75rem;
  flex-grow: 1;
  aspect-ratio: 19/10;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  cursor: pointer;
  ${props =>
    props.$name !== 'Blank' &&
    css<{ $name: string }>`
      background-image: url(${src}${({ theme }) => theme.name}${props => getUrl(props.$name)});
      background-position: center;
      background-size: 110%;
      transition: all 200ms ease-in-out;
    `}

  &:hover {
    background-size: 100%;
    border-color: ${({ theme }) => theme.colors.accent};
  }
`
