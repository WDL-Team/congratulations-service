export interface FormInputProps {
  name: string
  type: string
  placeholder?: string
  error?: boolean
  errorMessage?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}
