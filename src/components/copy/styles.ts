import styled, { css, RuleSet } from 'styled-components'
import { ThemeVariants } from '../../const/theme'

export const StContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 0.75rem;
  padding: 0 3.5rem 0 1rem;
  height: 3rem;
  width: 100%;
  box-sizing: border-box;
  margin-top: 0.5rem;
  border: 1px solid ${props => props.theme.colors.primary};
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.text};
`

export const StInput = styled.input`
  outline: none;
  border: none;
  width: 100%;
  height: 100%;
  margin-top: 0.5rem;
  padding: 0;
  color: ${props => props.theme.colors.text};
  background-color: ${props => props.theme.colors.secondary};
`

export const StLabel = styled.label`
  position: absolute;
  pointer-events: none;
  font-size: 0.8rem;
  left: 1rem;
  top: 0;
  color: ${props => props.theme.colors.text};
  opacity: 0.7;
`

const filter: Record<ThemeVariants, RuleSet> = {
  dark: css`
    filter: brightness(0) saturate(100%) invert(100%) sepia(1%) saturate(2344%) hue-rotate(335deg) brightness(119%) contrast(100%);
  `,
  light: css`
    filter: brightness(0) saturate(100%) invert(0%) sepia(98%) saturate(0%) hue-rotate(349deg) brightness(97%) contrast(103%);
  `,
}

export const StCopyButton = styled.img`
  position: absolute;
  right: 0.5rem;
  top: 1rem;
  width: 1rem;
  height: 1rem;
  cursor: pointer;
  ${props => filter[props.theme.name]};
  opacity: 0.75;
  &:hover {
    opacity: 1;
  }
`

export const StOpenButton = styled.img`
  position: absolute;
  right: 2rem;
  top: 1rem;
  width: 1rem;
  height: 1rem;
  cursor: pointer;
  ${props => filter[props.theme.name]};
  opacity: 0.75;
  &:hover {
    opacity: 1;
  }
`

export const StMessage = styled.div`
  @keyframes show {
    0% {
      opacity: 0;
      transform: translateY(1rem);
    }
    10% {
      opacity: 1;
    }
    50% {
      transform: translateY(0);
    }
    90% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translateY(0);
    }
  }
  font-size: 0.75rem;
  background-color: ${props => props.theme.colors.tertiary};
  color: ${props => props.theme.colors.text};
  text-align: center;
  border-radius: 6px;
  padding: 0.25rem 0.75rem;
  position: absolute;
  z-index: 2;
  right: 0;
  top: -2rem;
  opacity: 0;
  animation: forwards 3s show;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: ${props => props.theme.colors.tertiary} transparent transparent;
  }
`
