import styled from 'styled-components'

import { useAppSelector } from '../app/hooks'

import { selectAllTodos } from '../features/todos/todosSlice'

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing(4)};
`

const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
`

const Counter = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`

export const Header = () => {
  const todos = useAppSelector(selectAllTodos)
  const completed = todos.filter((t) => t.completed).length
  return (
    <Wrapper>
      <Title>Todo List</Title>
      <Counter>
        {completed}/{todos.length} done
      </Counter>
    </Wrapper>
  )
}
