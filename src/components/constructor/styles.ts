import styled from 'styled-components'

export const StContainer = styled.div<{ $preview: boolean }>`
  width: calc(100% - 1rem);
  display: flex;
  flex-direction: row;
  column-gap: 1rem;
  z-index: 1;

  > section {
    width: ${props => (props.$preview ? '50%' : '100%')};
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    row-gap: 1rem;

    > section {
      width: 100%;
    }
  }
`

export const StForm = styled.form`
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 0.75rem;
  padding: 0.5rem;
  box-sizing: border-box;
`

export const StNameWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  column-gap: 1rem;
  /*
  > div {
    width: 50%;
  }
 */
`

export const StOptionsWrap = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1rem;
`

export const StSwitcherWrap = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1rem;
  border-radius: 0.75rem;
  padding: 0.5rem;
  height: 3rem;
  box-sizing: border-box;
  margin-top: 0.5rem;
  /* 
  background-color: ${props => props.theme.colors.secondary};
  > span {
    opacity: 0.7;
    font-size: 0.8rem;
  }
  */
`
