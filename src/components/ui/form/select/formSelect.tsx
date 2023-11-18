import { FC } from 'react'
import { TFormSelectProps } from './types'
import { Select } from '.'
import { StContainer, StLabel, StSpan } from './styles'

export const FormSelect: FC<TFormSelectProps> = ({ name, options, placeholder, onChange, errorMessage, error }) => {
  return (
    <StContainer>
      <Select name={name} options={options} onChange={onChange} />
      <StLabel htmlFor={name}>{placeholder}</StLabel>
      {error && <StSpan>{errorMessage}</StSpan>}
    </StContainer>
  )
}
