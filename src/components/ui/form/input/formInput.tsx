import { FC } from 'react'
import { TFormInputProps } from './types'
import { StContainer, StLabel, StSpan, StInput } from './styles'

export const FormInput: FC<TFormInputProps> = ({ name, type, placeholder, onChange, errorMessage, error }) => {
  return (
    <StContainer>
      <StInput type={type} name={name} placeholder={''} onChange={onChange} autoComplete="off" maxLength={28} />
      <StLabel htmlFor={name}>{placeholder}</StLabel>
      {error && <StSpan>{errorMessage}</StSpan>}
    </StContainer>
  )
}
