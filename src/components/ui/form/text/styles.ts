import styled from 'styled-components'

export const StContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 0.75rem;
  padding: 0 0.75rem 0 1rem;
  width: 100%;
  box-sizing: border-box;
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
  margin-top: 2rem;
  margin-bottom: 0.5rem;
  padding: 0;
  color: ${props => props.theme.colors.text};
  background-color: ${props => props.theme.colors.secondary};
  resize: vertical;
`

export const StLabel = styled.label`
  position: absolute;
  pointer-events: none;
  left: 1rem;
  top: 0.7rem;
  opacity: 0.7;
  transition: all 0.3s ease;

  ${StTextArea}:focus ~ & {
    font-size: 0.8rem;
    top: 0;
  }

  ${StTextArea}:not(:placeholder-shown) ~ & {
    font-size: 0.8rem;
    top: 0;
  }
`

export const StRest = styled.span`
  position: absolute;
  right: 1rem;
  top: 0;
  opacity: 0.7;
  font-size: 0.8rem;
`

export const StSpan = styled.span`
  margin-top: 0.438rem;
  font-size: 0.8rem;
  color: rgba(221, 76, 30, 1);
`
export const StTemplateWrap = styled.div`
  position: absolute;
  top: 0;
  left: 40%;
  width: 30%;
  background-color: ${props => props.theme.colors.secondary};

  > span {
    font-size: 0.8rem;
    opacity: 0.7;
  }
`
