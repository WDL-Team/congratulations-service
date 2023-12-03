import React, { FC, useState, useEffect, useRef } from 'react'
import { TFormTextProps } from './types'
import { StContainer, StSpan, StRest, StTextArea, StLabel, StTemplateWrap } from './styles'
import { Select } from '../select'
import { useSettings } from '@/context'
import { textTemplates } from '~/const/templates'
import { useLocalization } from '~/hooks/useLocalization'

export const FormText: FC<TFormTextProps> = ({ id, placeholder, rest, onChange, errorMessage, error }) => {
  const { lang } = useSettings()
  const [options, setOptions] = useState<string[]>([])
  const ref = useRef<HTMLTextAreaElement>(null)
  const { loc } = useLocalization()

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
      <StTextArea ref={ref} className="scrolled" id={id} placeholder={''} onChange={onChange} />
      <StLabel htmlFor={id}>{placeholder}</StLabel>
      <StRest>{rest}</StRest>
      <StTemplateWrap>
        <span>{loc('template')}:</span>
        <Select id="template" options={options} onChange={selectTemplateHandler} />
      </StTemplateWrap>
      {error && <StSpan>{errorMessage}</StSpan>}
    </StContainer>
  )
}
