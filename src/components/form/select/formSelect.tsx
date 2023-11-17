import { FC } from 'react'
import { FormSelectProps } from './types'
import { StContainer, StLabel, StSpan, StSelect } from './styles'

export const FormSelect: FC<FormSelectProps> = ({ name, options, placeholder, onChange, errorMessage, error }) => {
  return (
    <StContainer>
      <StSelect name={name} onChange={onChange}>
        {options.map((opt, id) => (
          <option value={id} key={id}>
            {opt}
          </option>
        ))}
      </StSelect>
      <StLabel htmlFor={name}>{placeholder}</StLabel>
      {error && <StSpan>{errorMessage}</StSpan>}
    </StContainer>
  )
}
