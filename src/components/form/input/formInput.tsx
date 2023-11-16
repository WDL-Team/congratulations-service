import { FC } from 'react'
import { FormInputProps } from './types'
import { StContainer, StLabel, StSpan, StInput } from './styles'

export const FormInput: FC<FormInputProps> = ({ name, type, placeholder, errorMessage, error }) => {
  return (
    <StContainer>
      <StInput type={type} name={name} placeholder={''} autoComplete="off" required />
      <StLabel htmlFor={name}>{placeholder}</StLabel>
      {error && <StSpan>{errorMessage}</StSpan>}
    </StContainer>
  )
}
