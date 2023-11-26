import { FC } from 'react'
import { TFormInputProps } from './types'
import { StContainer, StLabel, StSpan, StInput } from './styles'

export const FormInput: FC<TFormInputProps> = ({ id, type, placeholder, onChange, errorMessage, error }) => {
  return (
    <StContainer>
      <StInput type={type} id={id} placeholder={''} onChange={onChange} autoComplete="off" maxLength={28} />
      <StLabel htmlFor={id}>{placeholder}</StLabel>
      {error && <StSpan>{errorMessage}</StSpan>}
    </StContainer>
  )
}
