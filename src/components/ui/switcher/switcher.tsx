import styled from 'styled-components'

export const Switcher = ({ toggled, onClick }: { toggled: boolean; onClick: () => void }) => {
  return (
    <StSwitchContainer onClick={onClick}>
      <StSwitchToggle $toggled={toggled} />
    </StSwitchContainer>
  )
}

const StSwitchContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 48px;
  height: 24px;
  background-color: ${({ theme }) => (theme.name === 'dark' ? theme.colors.tertiary : theme.colors.accent)};
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
`
const StSwitchToggle = styled.div<{ $toggled: boolean }>`
  margin-top: 2px;
  width: 20px;
  height: 20px;
  background-color: ${props => props.theme.colors.secondary};
  border-radius: 50%;
  transform: translateX(${props => (props.$toggled ? '26px' : '2px')});
  transition: transform 0.2s ease-in-out;
`
