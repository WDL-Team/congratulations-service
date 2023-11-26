export interface TFormSelectProps {
  id: string
  options: string[]
  placeholder: string
  error?: boolean
  errorMessage?: string
  onChange?: React.ChangeEventHandler<HTMLSelectElement>
}
