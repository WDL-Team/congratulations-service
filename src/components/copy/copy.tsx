import { useState } from 'react'
import { StContainer, StCopyButton, StInput, StMessage } from './styles'
import copyImg from '../../assets/copy.svg'

export const CopyInput = ({ text }: { text: string }) => {
  const [copyed, setCopyed] = useState(false)

  const handleCopy = () => {
    if (typeof navigator !== 'undefined') navigator.clipboard.writeText(text)
    setCopyed(true)
    setTimeout(() => setCopyed(false), 3000)
  }

  return (
    <StContainer>
      <StInput type="text" value={text} readOnly />
      <StCopyButton src={copyImg} alt="copy" title="copy" onClick={handleCopy} />
      {copyed && <StMessage>Copyed!</StMessage>}
    </StContainer>
  )
}
