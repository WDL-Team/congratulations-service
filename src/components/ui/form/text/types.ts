export interface TFormTextProps {
  name: string
  placeholder?: string
  rest?: number
  error?: boolean
  errorMessage?: string
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>
  callback?: (el: HTMLTextAreaElement) => void
}

export interface TTextProps {
  name: string
  placeholder?: string
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>
}
