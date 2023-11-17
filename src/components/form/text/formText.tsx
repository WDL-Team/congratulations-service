import { FC } from 'react'
import { FormTextProps } from './types'
import { StContainer, StLabel, StSpan, StTextArea, StRest } from './styles'

export const FormText: FC<FormTextProps> = ({ name, placeholder, rest, onChange, errorMessage, error }) => {
  return (
    <StContainer>
      <StTextArea name={name} placeholder={''} onChange={onChange} />
      <StLabel htmlFor={name}>{placeholder}</StLabel>
      <StRest>{rest}</StRest>
      {error && <StSpan>{errorMessage}</StSpan>}
    </StContainer>
  )
}
