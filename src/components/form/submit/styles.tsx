import styled from 'styled-components'

export const StButton = styled.button`
  align-self: center;
  margin: 0.5rem;
  height: 2.5rem;
  padding: 0 1.5rem;
  border-radius: 0.75rem;
  border: 2px solid ${props => props.theme.colors.secondary};
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.text};
  outline: none;
  transition: border 0.25s linear;
  cursor: pointer;

  &:focus {
    outline: none;
  }
  &:hover {
    border: 2px solid ${props => props.theme.colors.tertiary};
  }
`
