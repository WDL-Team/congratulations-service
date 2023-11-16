import { useState } from 'react'
import { FormInput } from '../form/input'
import { FormSelect } from '../form/select'
import { FormText } from '../form/text'
import { FormSubmit } from '../form/submit'
import { CopyInput } from '../copy'
import { queryToString } from '../../utils/query'
import { useRouter } from '../../hooks/useRouter'
import { Congrats } from '../congrats'
import { StContainer, StNameWrap } from './styles'
import { cardViewNames } from '../card-view'

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
          <StNameWrap>
            <FormInput type="text" name="name" placeholder="Кого поздравляем?" error={false} errorMessage="Проверьте имя" />
            <FormSelect name="card" options={cardViewNames} placeholder="Card template" />
          </StNameWrap>
          <FormText name="text" placeholder="Текст поздравления" error={false} errorMessage="Напишите своё поздравление" />
          <FormSubmit>Создать</FormSubmit>
        </form>
        {result && <CopyInput text={`${host}?${result}`} />}
      </article>
      <Congrats query={result} preview={true} />
    </StContainer>
  )
}
