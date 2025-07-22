import styled from 'styled-components'

import { FILTERS_ORDER } from '../../../utils/constants'

import { useAppDispatch, useAppSelector } from '../../../app/hooks'

import { setFilter } from '../todosSlice'

const Wrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
  margin-bottom: ${({ theme }) => theme.spacing(4)};
`

const Button = styled.button<{ active: boolean }>`
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(3)};
  border-radius: ${({ theme }) => theme.radius.md};
  background-color: ${({ active, theme }) => (active ? theme.colors.primary : theme.colors.surface)};
  color: ${({ active, theme }) => (active ? '#fff' : theme.colors.text)};
  border: 1px solid ${({ theme }) => theme.colors.border};
`

export const TodoFilter = () => {
  const dispatch = useAppDispatch()
  const current = useAppSelector((s) => s.todos.filter)

  return (
    <Wrapper>
      {FILTERS_ORDER.map((f) => (
        <Button key={f} active={current === f} onClick={() => dispatch(setFilter(f))}>
          {f.charAt(0).toUpperCase() + f.slice(1)}
        </Button>
      ))}
    </Wrapper>
  )
}
