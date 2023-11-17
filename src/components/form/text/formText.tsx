import { FC } from 'react'
import { FormTextProps } from './types'
import { StContainer, StLabel, StSpan, StTextArea } from './styles'

export const FormText: FC<FormTextProps> = ({ name, placeholder, onChange, errorMessage, error }) => {
  return (
    <StContainer>
      <StTextArea name={name} placeholder={''} onChange={onChange} required />
      <StLabel htmlFor={name}>{placeholder}</StLabel>
      {error && <StSpan>{errorMessage}</StSpan>}
    </StContainer>
  )
}
