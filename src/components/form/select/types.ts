export interface FormSelectProps {
  name: string
  options: string[]
  placeholder: string
  error?: boolean
  errorMessage?: string
  onChange?: React.ChangeEventHandler<HTMLSelectElement>
}
