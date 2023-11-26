import { FC } from 'react'
import { TTextProps } from './types'
import { StLabel, StTextArea } from './styles'

export const TextArea: FC<TTextProps> = ({ id, placeholder, onChange }) => {
  return (
    <>
      <StTextArea className="scrolled" id={id} onChange={onChange} />
      <StLabel htmlFor={id}>{placeholder}</StLabel>
    </>
  )
}
