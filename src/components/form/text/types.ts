export interface FormTextProps {
  name: string
  placeholder?: string
  rest?: number
  error?: boolean
  errorMessage?: string
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>
}
