export interface TFormTextProps {
  id: string
  placeholder?: string
  rest?: number
  error?: boolean
  errorMessage?: string
  onChange?: (arg: React.ChangeEvent<HTMLTextAreaElement> | HTMLTextAreaElement) => void
}

export interface TTextProps {
  id: string
  placeholder?: string
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>
}
