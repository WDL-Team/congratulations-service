import { FC } from 'react'
import { TFormSelectProps } from './types'
import { StSelect } from './styles'

export type TSelectProps = Omit<TFormSelectProps, 'placeholder'>

export const Select: FC<TSelectProps> = ({ name, options, onChange }) => {
  return (
    <StSelect name={name} onChange={onChange}>
      {options.map((opt, id) => (
        <option value={id} key={id}>
          {opt}
        </option>
      ))}
    </StSelect>
  )
}
