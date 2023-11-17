import { useState } from 'react'
import { FormInput } from '../form/input'
import { FormSelect } from '../form/select'
import { FormText } from '../form/text'
// import { FormSubmit } from '../form/submit'
import { CopyInput } from '../copy'
import { queryToString } from '../../utils/query'
import { useRouter } from '../../hooks/useRouter'
import { Congrats } from '../congrats'
import { StContainer, StNameWrap } from './styles'
import { cardViewNames } from '../card-view'

const MAX = 2024 - 18 - 6 - 28 // Max url length - host length - card - name

export function Constructor() {
  const { host } = useRouter()
  const [result, setResult] = useState('')
  const [rest, setRest] = useState(0)

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = new FormData(event.target as HTMLFormElement)
    const data: Record<string, string> = { text: '', name: '' }
    for (const [key, value] of form.entries()) {
      data[key] = String(value)
    }

    setResult(queryToString(data))
  }

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    event.preventDefault()
    const [name, value] = [event.target.name, event.target.value]

    if (event.target instanceof HTMLTextAreaElement) {
      if (value.length > MAX) event.target.value = value.slice(0, MAX)
      event.target.rows = event.target.value.split('\n').length
      setRest(MAX - event.target.value.length)
    }

    setResult(prev => queryToString({ [name]: value }, prev))
  }

  return (
    <StContainer>
      <article>
        <form onSubmit={submitHandler}>
          <h2 style={{ alignSelf: 'center' }}>Preparing congratulations</h2>
          <StNameWrap>
            <FormInput type="text" name="name" placeholder="Recipient name" onChange={changeHandler} />
            <FormSelect name="card" options={cardViewNames} onChange={changeHandler} placeholder="Card template" />
          </StNameWrap>
          <FormText name="text" placeholder="Congratulation text" rest={rest} onChange={changeHandler} />
          {/* <FormSubmit>Perform</FormSubmit> */}
        </form>
        {result && <CopyInput text={`${host}?${result}`} placeholder="Link to your custom congratulation:" />}
      </article>
      <Congrats query={result} preview={true} />
    </StContainer>
  )
}
