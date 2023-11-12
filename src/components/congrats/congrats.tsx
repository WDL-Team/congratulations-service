import type { TCongratsData } from '../../types/congrats'
import { queryToObject } from '../../utils/query'
import { StContainer } from './styles'

export function Congrats({ query }: { query: string }) {
  const data = queryToObject(query) as TCongratsData
  const { name = '', text = '' } = data

  return (
    <StContainer>
      <h1>{name}</h1>
      <p>{text}</p>
    </StContainer>
  )
}
