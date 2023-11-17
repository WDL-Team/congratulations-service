import { FC } from 'react'
import { TTextProps } from './types'
import { StLabel, StTextArea } from './styles'

export const TextArea: FC<TTextProps> = ({ name, placeholder, onChange }) => {
  return (
    <>
      <StTextArea className="scrolled" name={name} onChange={onChange} />
      <StLabel htmlFor={name}>{placeholder}</StLabel>
    </>
  )
}
