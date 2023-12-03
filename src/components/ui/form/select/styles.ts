import styled from 'styled-components'

export const StContainer = styled.div<{ $hidden: boolean }>`
  position: relative;
  display: ${props => (props.$hidden ? 'none' : 'flex')};
  flex-direction: column;
  border-radius: 0.75rem;
  padding: 0 0.75rem 0 1rem;
  height: 3rem;
  width: 100%;
  box-sizing: border-box;
  margin-top: 0.5rem;
  border: 1px solid ${props => props.theme.colors.primary};
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.text};

  > select {
    margin-top: 1.5rem;
  }
`

export const StSelect = styled.select`
  margin-top: 2px;
  outline: none;
  border: none;
  background-color: inherit;
  color: inherit;
`

export const StLabel = styled.label`
  position: absolute;
  pointer-events: none;
  left: 1rem;
  top: 0;
  color: ${props => props.theme.colors.text};
  opacity: 0.7;
  font-size: 0.8rem;
  white-space: nowrap;
`

export const StSpan = styled.span`
  margin-top: 0.438rem;
  font-size: 0.8rem;
  color: rgba(221, 76, 30, 1);
`
