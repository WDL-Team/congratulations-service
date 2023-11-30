import styled, { css } from 'styled-components'

const preview = css`
  font-size: 12px;
  background-color: ${props => props.theme.colors.secondary};
  border-radius: 0.75rem;
  position: relative;

  > div {
    border-radius: 0.75rem;
  }

  &::after {
    content: 'preview';
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    opacity: 0.7;
  }
`

export const StContainer = styled.section<{ $preview: boolean }>`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  ${props => props.$preview && preview}
`
