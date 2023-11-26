import { CardBlank } from './blank'
import { CardInky } from './inky'
import { CardDotty } from './dotty'
import { CardBubbles } from './bubbles'
import { CardWholes } from './wholes'
import { CardHexagon } from './hexagon'
import { CardChars } from './chars'
import { CardConfetti } from './confetti'
import { CardSnow } from './snow'
import type { TCongratsData } from '~/types/congrats'

export type TCardViewProps = Omit<TCongratsData, 'card'>

enum CardView {
  Blank,
  Inky,
  Dotty,
  Chars,
  Bubbles,
  Wholes,
  Hexagon,
  Confetti,
  Snow,
}

export const cardViewNames = Object.keys(CardView).filter(val => !Number.isFinite(Number(val)))

const dafaultCardView = CardView.Blank

type TCardView = (props: TCardViewProps) => JSX.Element
type TCardList = { [key in CardView]: TCardView }

const cardViewList: TCardList = {
  [CardView.Blank]: CardBlank,
  [CardView.Inky]: CardInky,
  [CardView.Dotty]: CardDotty,
  [CardView.Chars]: CardChars,
  [CardView.Bubbles]: CardBubbles,
  [CardView.Wholes]: CardWholes,
  [CardView.Hexagon]: CardHexagon,
  [CardView.Confetti]: CardConfetti,
  [CardView.Snow]: CardSnow,
}

export const getCardViewByName = (card: number | string = 0) => {
  if (cardViewList[card as CardView]) {
    return cardViewList[card as CardView]
  }
  return cardViewList[dafaultCardView]
}
