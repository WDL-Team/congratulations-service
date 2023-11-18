import React, { FC, useState, useEffect, useRef } from 'react'
import { TFormTextProps } from './types'
import { StContainer, StSpan, StRest, StTextArea, StLabel, StTemplateWrap } from './styles'
import { Select } from '../select'
import { useSettings } from '@/context'
import { textTemplates } from '~/const/templates'

export const FormText: FC<TFormTextProps> = ({ name, placeholder, rest, onChange, errorMessage, error }) => {
  const { lang } = useSettings()
  const [options, setOptions] = useState<string[]>([])
  const ref = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    setOptions(textTemplates.map(obj => obj[lang].name))
  }, [lang])

  const selectTemplateHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault()

    if (ref.current) {
      const n = Number(event.target.value) || 0
      ref.current.value = textTemplates[n][lang].text
      if (onChange) onChange(ref.current)
    }
  }

  return (
    <StContainer>
      <StTextArea ref={ref} className="scrolled" name={name} onChange={onChange} />
      <StLabel htmlFor={name}>{placeholder}</StLabel>
      <StRest>{rest}</StRest>
      <StTemplateWrap>
        <span>Template:</span>
        <Select name="template" options={options} onChange={selectTemplateHandler} />
      </StTemplateWrap>
      {error && <StSpan>{errorMessage}</StSpan>}
    </StContainer>
  )
}
