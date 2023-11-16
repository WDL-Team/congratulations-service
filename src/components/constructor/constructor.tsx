import { useState } from 'react'
import { FormInput } from '../form/input'
import { FormText } from '../form/text'
import { FormSubmit } from '../form/submit'
import { CopyInput } from '../copy'
import { queryToString } from '../../utils/query'
import { useRouter } from '../../hooks/useRouter'
import { Congrats } from '../congrats'
import { StContainer } from './styles'

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

    setResult(queryToString(data))
  }

  return (
    <StContainer>
      <article>
        <form onSubmit={submitHandler}>
          <h2 style={{ alignSelf: 'center' }}>Подготовка поздравления</h2>
          <FormInput type="text" name="name" placeholder="Имя получателя поздравления" error={false} errorMessage="Проверьте имя" />
          <FormText name="text" placeholder="Текст поздравления" error={false} errorMessage="Напишите своё поздравление" />
          <FormSubmit>Создать</FormSubmit>
        </form>
        {result && <CopyInput text={`${host}?${result}`} />}
      </article>
      <Congrats query={result} preview={true} />
    </StContainer>
  )
}
