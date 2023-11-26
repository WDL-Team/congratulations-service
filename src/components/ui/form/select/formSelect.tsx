import { FC } from 'react'
import { TFormSelectProps } from './types'
import { Select } from '.'
import { StContainer, StLabel, StSpan } from './styles'

export const FormSelect: FC<TFormSelectProps> = ({ id, options, placeholder, onChange, errorMessage, error }) => {
  return (
    <StContainer>
      <Select id={id} options={options} onChange={onChange} />
      <StLabel htmlFor={id}>{placeholder}</StLabel>
      {error && <StSpan>{errorMessage}</StSpan>}
    </StContainer>
  )
}
