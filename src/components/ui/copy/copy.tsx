import { useState } from 'react'
import { StContainer, StCopyButton, StOpenButton, StInput, StMessage, StLabel } from './styles'
import copyImg from '~/assets/copy.svg'
import openImg from '~/assets/open.svg'

export const CopyInput = ({ text, placeholder }: { text: string; placeholder: string }) => {
  const [copyed, setCopyed] = useState(false)

  const handleCopy = () => {
    if (typeof navigator !== 'undefined') void navigator.clipboard.writeText(text)
    setCopyed(true)
    setTimeout(() => setCopyed(false), 3000)
  }

  return (
    <StContainer>
      <StInput type="text" id="copy_field" value={text} readOnly />
      <StLabel htmlFor="copy_field">{placeholder}</StLabel>
      <StOpenButton src={openImg} alt="open" title="open" onClick={() => window.open(text, '_blank')} />
      <StCopyButton src={copyImg} alt="copy" title="copy" onClick={handleCopy} />
      {copyed && <StMessage>Copyed!</StMessage>}
    </StContainer>
  )
}
