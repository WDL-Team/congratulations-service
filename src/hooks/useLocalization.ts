import { useSettings } from '@/context'
import { localization } from '~/const/localization'
import { defaultValues } from '~/types/settings'

const def = defaultValues.language

export const useLocalization = () => {
  const { lang } = useSettings()

  const loc = (str: string) => {
    return localization[lang][str] || localization[def][str] || str
  }

  return { loc }
}
