import type { TCongratsData } from '~/types/congrats'
import { CardBlank } from './blank'
import { CardInky } from './inky'
import { CardDotty } from './dotty'
import { CardBubbles } from './bubbles'
import { CardWholes } from './wholes'
import { CardHexagon } from './hexagon'
import { CardChars } from './chars'
import { CardConfetti } from './confetti'
import { CardSnow } from './snow'
import { CardMix } from './mix'
import { CardLovely } from './lovely'
import { CardFunny } from './funny'
import { CardHaunted } from './haunted'
import { CardBalloons } from './balloons'
import { CardGifts } from './gifts'
import { CardLava } from './lava'
import { CardSea } from './sea'

export type TCardViewProps = Omit<TCongratsData, 'card'>

export enum CardView {
  Blank,
  Inky,
  Dotty,
  Chars,
  Bubbles,
  Wholes,
  Hexagon,
  Confetti,
  Snow,
  Mix,
  Lovely,
  Funny,
  Haunted,
  Balloons,
  Gifts,
  Lava,
  Sea,
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
  [CardView.Mix]: CardMix,
  [CardView.Lovely]: CardLovely,
  [CardView.Funny]: CardFunny,
  [CardView.Haunted]: CardHaunted,
  [CardView.Balloons]: CardBalloons,
  [CardView.Gifts]: CardGifts,
  [CardView.Lava]: CardLava,
  [CardView.Sea]: CardSea,
}

export const getCardViewByName = (card: number | string = 0) => {
  if (cardViewList[card as CardView]) {
    return cardViewList[card as CardView]
  }
  return cardViewList[dafaultCardView]
}
