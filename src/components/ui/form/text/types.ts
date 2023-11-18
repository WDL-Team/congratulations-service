export interface TFormTextProps {
  name: string
  placeholder?: string
  rest?: number
  error?: boolean
  errorMessage?: string
  onChange?: (arg: React.ChangeEvent<HTMLTextAreaElement> | HTMLTextAreaElement) => void
}

export interface TTextProps {
  name: string
  placeholder?: string
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>
}
