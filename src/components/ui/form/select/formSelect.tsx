import React from 'react'
import { TFormSelectProps } from './types'
import { StContainer, StSelect, StLabel, StSpan } from './styles'

export const FormSelect = React.forwardRef((props: TFormSelectProps, ref: React.ForwardedRef<HTMLSelectElement>) => {
  const { id, options, placeholder, hidden, onChange, errorMessage, error } = props
  return (
    <StContainer $hidden={hidden}>
      <StSelect id={id} onChange={onChange} ref={ref}>
        {options.map((opt, i) => (
          <option value={i} key={i}>
            {opt}
          </option>
        ))}
      </StSelect>
      <StLabel htmlFor={id}>{placeholder}</StLabel>
      {error && <StSpan>{errorMessage}</StSpan>}
    </StContainer>
  )
})
