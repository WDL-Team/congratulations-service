import React from 'react'
import { styled } from 'styled-components'
import { Select } from '@/ui/form/select'
import { useSettings } from '.'
import { supportedLanguages } from '~/types/settings'
import type { TLanguage } from '~/types/settings'

import enImg from '~/assets/lang/en.svg'
import ruImg from '~/assets/lang/ru.svg'

const flags: { [key in TLanguage]: string } = {
  en: enImg,
  ru: ruImg,
}

const options = supportedLanguages.map(str => str.toUpperCase())

export function LanguageSelector() {
  const { lang, setLanguage } = useSettings()

  const changeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault()
    const newLang = options[Number(event.target.value)].toLowerCase() as TLanguage
    setLanguage(newLang)
  }

  return (
    <StContainer>
      <StFlag $url={flags[lang]} />
      <Select name="language" options={options} select={String(supportedLanguages.indexOf(lang))} onChange={changeHandler} />
    </StContainer>
  )
}

const StContainer = styled.div`
  height: 24px;
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  background-color: ${({ theme }) => theme.colors.tertiary};

  > select {
    border-radius: 0 12px 12px 0;
  }
`
const StFlag = styled.div<{ $url: string }>`
  width: 24px;
  height: 24px;
  border-radius: 6px;
  background-image: url(${props => props.$url});
  background-size: cover;
`
