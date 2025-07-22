import { type ReactNode } from 'react'
import styled from 'styled-components'

const Container = styled.main`
  max-width: 640px;
  margin-inline: auto;
  padding: ${({ theme }) => theme.spacing(4)};
`

export const Layout = ({ children }: { children: ReactNode }) => {
  return <Container>{children}</Container>
}
