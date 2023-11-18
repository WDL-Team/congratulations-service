import { CardBlank } from './blank'
import { CardInky } from './inky'
import type { TCongratsData } from '~/types/congrats'

export type TCardViewProps = Omit<TCongratsData, 'card'>

enum CardView {
  Blank,
  Inky,
}

export const cardViewNames = Object.keys(CardView).filter(val => !Number.isFinite(Number(val)))

const dafaultCardView = CardView.Blank

type TCardView = (props: TCardViewProps) => JSX.Element
type TCardList = { [key in CardView]: TCardView }

const cardViewList: TCardList = {
  [CardView.Blank]: CardBlank,
  [CardView.Inky]: CardInky,
}

export const getCardViewByName = (card: number | string = 0) => {
  if (cardViewList[card as CardView]) {
    return cardViewList[card as CardView]
  }
  return cardViewList[dafaultCardView]
}
