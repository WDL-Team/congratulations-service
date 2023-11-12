import styled from 'styled-components'

export const StContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 0.75rem;
  padding: 0 0.75rem 0 1rem;
  height: 5rem;
  width: 34rem;
  margin-top: 0.5rem;
  border: 1px solid ${props => props.theme.colors.primary};
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.text};
`

export const StTextArea = styled.textarea`
  outline: none;
  border: none;
  width: 100%;
  height: 100%;
  margin-top: 1.5rem;
  color: ${props => props.theme.colors.text};
  background-color: ${props => props.theme.colors.secondary};
`

export const StLabel = styled.label`
  position: absolute;
  pointer-events: none;
  left: 1rem;
  top: 0.8rem;
  transition: 0.3s ease all;
  color: ${props => props.theme.colors.text};
  opacity: 0.7;

  ${StTextArea}:focus ~ & {
    font-size: 0.8rem;
    left: 1rem;
    top: 0;
  }

  ${StTextArea}:not(:placeholder-shown) ~ & {
    font-size: 0.8rem;
    left: 1rem;
    top: 0;
  }
`

export const StSpan = styled.span`
  margin-top: 0.438rem;
  font-size: 0.8rem;
  color: rgba(221, 76, 30, 1);
`
