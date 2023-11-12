import { useState } from 'react'
import { FormInput } from '../form/input'
import { FormText } from '../form/text'
import { FormSubmit } from '../form/submit'
import { CopyInput } from '../copy'
import { queryToString } from '../../utils/query'
import { useRouter } from '../../hooks/useRouter'

export function Constructor() {
  const { host } = useRouter()
  const [result, setResult] = useState('')

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = new FormData(event.target as HTMLFormElement)
    const data: Record<string, string> = {}
    for (const [key, value] of form.entries()) {
      data[key] = String(value)
    }
    console.log(data)
    console.log(`${host}?${queryToString(data)}`)
    setResult(`${host}?${queryToString(data)}`)
  }

  return (
    <div style={{ width: '70%' }}>
      <form onSubmit={submitHandler}>
        <h2 style={{ alignSelf: 'center' }}>Подготовка поздравления</h2>
        <FormInput type="text" name="name" placeholder="Имя получателя поздравления" error={false} errorMessage="Проверьте имя" />
        <FormText name="text" placeholder="Текст поздравления" error={false} errorMessage="Напишите своё поздравление" />
        <FormSubmit>Создать</FormSubmit>
      </form>
      {result && <CopyInput text={result} />}
    </div>
  )
}
