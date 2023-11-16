import styled from 'styled-components'

export const StContainer = styled.article<{ $preview: boolean }>`
  box-sizing: border-box;
  padding: 2rem;
  width: ${props => (props.$preview ? '100%' : 'calc(100% - 4rem)')};
  margin: ${props => (props.$preview ? '0' : '2rem')};
  font-size: ${props => (props.$preview ? '12px' : '1rem')};
  background-color: ${props => props.theme.colors.secondary};
  border-radius: 0.75rem;
  position: relative;

  &::after {
    content: 'preview';
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
  }
`
