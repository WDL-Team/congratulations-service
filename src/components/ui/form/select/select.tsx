import { FC } from 'react'
import { TFormSelectProps } from './types'
import { StSelect } from './styles'

export type TSelectProps = Omit<TFormSelectProps, 'placeholder'> & {
  select?: string
}

export const Select: FC<TSelectProps> = ({ id, options, select, onChange }) => {
  return (
    <StSelect id={id} onChange={onChange} defaultValue={select}>
      {options.map((opt, i) => (
        <option value={i} key={i}>
          {opt}
        </option>
      ))}
    </StSelect>
  )
}
