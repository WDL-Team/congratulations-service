import React from 'react'
import { StButton } from './styles'

export const FormSubmit = ({ children }: { children: string }) => {
  return <StButton type="submit">{children}</StButton>
}
