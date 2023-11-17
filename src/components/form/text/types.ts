export interface FormTextProps {
  name: string
  placeholder?: string
  error?: boolean
  errorMessage?: string
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>
}
