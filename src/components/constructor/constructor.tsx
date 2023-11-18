import React, { useState } from 'react'
import { FormInput } from '@/ui/form/input'
import { FormSelect } from '@/ui/form/select'
import { FormText } from '@/ui/form/text'
// import { FormSubmit } from '../form/submit'
import { CopyInput } from '@/ui/copy'
import { queryToString } from '~/utils/query'
import { useRouter } from '~/hooks/useRouter'
import { Congrats } from '@/congrats'
import { StContainer, StNameWrap, StOptionsWrap, StSwitcherWrap } from './styles'
import { cardViewNames } from '@/card-view'
import { Switcher } from '@/ui/switcher'

const MAX = 2024 - 18 - 7 - 28 // Max url length - host - card - name length

export function Constructor() {
  const { host } = useRouter()
  const [result, setResult] = useState('')
  const [rest, setRest] = useState(MAX)
  const [preview, setPreview] = useState(true)

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = new FormData(event.target as HTMLFormElement)
    const data: Record<string, string> = { text: '', name: '' }
    for (const [key, value] of form.entries()) {
      data[key] = String(value)
    }

    setResult(queryToString(data))
  }

  function changeHandler<T extends HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(obj: React.ChangeEvent<T> | T) {
    const isEvent = Object.hasOwn(obj, 'nativeEvent')
    if (isEvent) (obj as React.ChangeEvent<T>).preventDefault()
    const el = (isEvent ? (obj as React.ChangeEvent<T>).target : obj) as T

    if (el instanceof HTMLTextAreaElement) {
      if (el.value.length > MAX) el.value = el.value.slice(0, MAX)
      el.rows = Math.max(el.value.split('\n').length, 2)
      setRest(MAX - el.value.length)
    }

    setResult(prev => queryToString({ [el.name]: el.value }, prev))
  }

  return (
    <StContainer $preview={preview}>
      <article>
        <form onSubmit={submitHandler}>
          <h2 style={{ alignSelf: 'center' }}>Preparing congratulations</h2>
          <StNameWrap>
            <FormInput type="text" name="name" placeholder="Recipient name" onChange={changeHandler} />
            <StOptionsWrap>
              <FormSelect name="card" options={cardViewNames} onChange={changeHandler} placeholder="Card template" />
              <StSwitcherWrap>
                <span>Preview:</span>
                <Switcher toggled={preview} onClick={() => setPreview(prev => !prev)} />
              </StSwitcherWrap>
            </StOptionsWrap>
          </StNameWrap>
          <FormText name="text" placeholder="Congratulation text" rest={rest} onChange={changeHandler} />
          {/* <FormSubmit>Perform</FormSubmit> */}
        </form>
        {result && <CopyInput text={`${host}?${result}`} placeholder="Link to your custom congratulation:" />}
      </article>
      {preview && <Congrats query={result} preview={true} />}
    </StContainer>
  )
}
