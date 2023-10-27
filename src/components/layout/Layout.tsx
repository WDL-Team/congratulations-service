import type { ReactNode } from 'react'
import { styled } from 'styled-components'
import { Header } from '../header'
import { Footer } from '../footer'

export function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <StMain>{children}</StMain>
      <Footer />
    </>
  )
}

const StMain = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  background-color: ${props => props.theme.colors.primary};
`
