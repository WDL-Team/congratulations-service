import styled from 'styled-components'

export const StContainer = styled.div`
  width: calc(100% - 1rem);
  display: flex;
  flex-direction: row;
  column-gap: 1rem;

  > article {
    width: 50%;
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    row-gap: 1rem;

    > article {
      width: 100%;
    }
  }
`
export const StNameWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  column-gap: 1rem;
  > div {
    width: 50%;
  }
`
