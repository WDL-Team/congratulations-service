export interface TFormInputProps {
  id: string
  type: string
  placeholder?: string
  error?: boolean
  errorMessage?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}
