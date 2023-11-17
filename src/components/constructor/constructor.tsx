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

export function Constructor() {
  const { host } = useRouter()
  const [result, setResult] = useState('')

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
    setResult(prev => queryToString({ [event.target.name]: event.target.value }, prev))
  }

  return (
    <StContainer>
      <article>
        <form onSubmit={submitHandler}>
          <h2 style={{ alignSelf: 'center' }}>Preparing congratulations</h2>
          <StNameWrap>
            <FormInput type="text" name="name" placeholder="Recipient name" onChange={changeHandler} error={false} errorMessage="Check name" />
            <FormSelect name="card" options={cardViewNames} onChange={changeHandler} placeholder="Card template" />
          </StNameWrap>
          <FormText name="text" placeholder="Congratulation text" onChange={changeHandler} error={false} errorMessage="Write your congratulations" />
          {/* <FormSubmit>Perform</FormSubmit> */}
        </form>
        {result && <CopyInput text={`${host}?${result}`} placeholder="Link to your custom congratulation:" />}
      </article>
      <Congrats query={result} preview={true} />
    </StContainer>
  )
}
