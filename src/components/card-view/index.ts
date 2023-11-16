import { CardBlank } from './blank'
import type { TCongratsData } from '../../types/congrats'

export type TCardViewProps = Omit<TCongratsData, 'card'>

enum CardViewName {
  blank = 'blank',
  new = 'new',
}

const dafaultCardView = CardViewName.blank

type TCardView = (props: TCardViewProps) => JSX.Element
type TCardList = { [key in CardViewName]: TCardView }

const cardViewList: TCardList = {
  [CardViewName.blank]: CardBlank,
  [CardViewName.new]: CardBlank,
}

export const getCardViewByName = (name: string) => {
  const card = name as CardViewName
  if (CardViewName[card]) {
    return cardViewList[card]
  }
  return cardViewList[dafaultCardView]
}
