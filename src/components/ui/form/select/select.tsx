import { FC } from 'react'
import { TFormSelectProps } from './types'
import { StSelect } from './styles'

export type TSelectProps = Omit<TFormSelectProps, 'placeholder'> & {
  select?: string
}

export const Select: FC<TSelectProps> = ({ name, options, select, onChange }) => {
  return (
    <StSelect name={name} onChange={onChange} defaultValue={select}>
      {options.map((opt, id) => (
        <option value={id} key={id}>
          {opt}
        </option>
      ))}
    </StSelect>
  )
}
