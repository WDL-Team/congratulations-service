import { queryToObject } from '~/utils/query'
import { StContainer } from './styles'
import { getCardViewByName } from '../card-view'

type TCongratsProps = {
  query: string
  preview?: boolean
}

export function Congrats({ query, preview }: TCongratsProps) {
  const data = queryToObject(query)
  const { card, ...props } = data
  const CardView = getCardViewByName(card)

  return (
    <StContainer $preview={!!preview}>
      <CardView {...props} />
    </StContainer>
  )
}
