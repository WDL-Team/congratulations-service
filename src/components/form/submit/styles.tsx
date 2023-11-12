import styled from 'styled-components'

export const StButton = styled.button`
  align-self: center;
  margin: 0.5rem;
  height: 3rem;
  border: 2px solid ${props => props.theme.colors.secondary};
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.text};
  outline: none;
  transition: border 0.25s linear;

  &:focus {
    outline: none;
  }
  &:hover {
    border: 2px solid ${props => props.theme.colors.tertiary};
  }
`
