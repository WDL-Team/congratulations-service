import React from 'react'

export interface TFormSelectProps {
  id: string
  options: string[]
  placeholder: string
  hidden?: boolean
  error?: boolean
  errorMessage?: string
  onChange?: React.ChangeEventHandler<HTMLSelectElement>
}
