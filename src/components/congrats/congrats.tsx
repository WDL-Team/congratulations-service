import { queryToObject } from '../../utils/query'
import { StContainer } from './styles'
import { getCardViewByName } from '../card-view'

const dafaultCardView = 'blank'

type TCongratsProps = {
  query: string
  preview?: boolean
}

export function Congrats({ query, preview }: TCongratsProps) {
  const data = queryToObject(query)
  const { card = dafaultCardView, ...props } = data

  const CardView = getCardViewByName(card)

  return (
    <StContainer $preview={!!preview}>
      {/* TODO: remove */}
      <p>card-wiew: {card}</p>
      <CardView {...props} />
    </StContainer>
  )
}
