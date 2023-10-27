import { useState, FC } from 'react'
import styled from 'styled-components'
import { useTheme } from '.'
import iconTheme from '../../assets/iconTheme.svg'

export const ThemeSwitcher: FC = () => {
  const { themeName, setTheme } = useTheme()
  const [dark, setDark] = useState<boolean>(themeName === 'dark')

  const handleClick = () => {
    setDark(prev => {
      if (setTheme) {
        setTimeout(() => {
          setTheme(prev ? 'light' : 'dark')
        }, 250)
      }
      return !prev
    })
  }
  return (
    <StSwitchBlock>
      <StIcon $icon={iconTheme} />
      <StSwitchContainer onClick={handleClick} $dark={dark}>
        <StSwitchToggle $dark={dark} />
      </StSwitchContainer>
    </StSwitchBlock>
  )
}

const StSwitchBlock = styled.div`
  margin: 0 0 0 auto;
  display: flex;
  gap: 10px;
`
const StSwitchContainer = styled.div<{ $dark?: boolean }>`
  display: inline-block;
  width: 48px;
  height: 24px;
  background-color: ${props => (props.$dark ? props.theme.colors.tertiary : props.theme.colors.accent)};
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
`
const StSwitchToggle = styled.div<{ $dark: boolean }>`
  margin-top: 2px;
  width: 20px;
  height: 20px;
  background-color: ${props => props.theme.colors.secondary};
  border-radius: 50%;
  transform: translateX(${props => (props.$dark ? '26px' : '2px')});
  transition: transform 0.2s ease-in-out;
`
const StIcon = styled.div<{ $icon: string }>`
  width: 24px;
  height: 24px;
  background-image: url(${props => props.$icon});
  background-size: cover;
`
