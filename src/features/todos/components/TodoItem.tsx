import { useState } from 'react'
import styled, { css } from 'styled-components'

import { useAppDispatch } from '../../../app/hooks'

import { editTodo, removeTodo, toggleCompleted } from '../todosSlice'

import { TodoEditForm } from './TodoEditForm'

import type { Todo } from '../../../types/todo'
import type { DraggableProvided } from '@hello-pangea/dnd'

const Item = styled.li<{ completed: boolean }>`
  background-color: ${({ theme }) => theme.colors.surface};
  padding: ${({ theme }) => theme.spacing(3)};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
  ${({ completed, theme }) =>
    completed &&
    css`
      text-decoration: line-through;
      color: ${theme.colors.textSecondary};
      background-color: ${theme.colors.completed};
    `}
`

const Text = styled.span`
  flex: 1;
`

const IconButton = styled.button`
  font-size: 0.875rem;
  padding: ${({ theme }) => theme.spacing(1)};
  border-radius: ${({ theme }) => theme.radius.md};
  &:hover {
    background-color: ${({ theme }) => theme.colors.border};
  }
`

interface Props {
  todo: Todo
  provided: DraggableProvided
  index: number
}

export const TodoItem = ({ todo, provided }: Props) => {
  const dispatch = useAppDispatch()
  const [editing, setEditing] = useState(false)

  const handleToggle = () => dispatch(toggleCompleted(todo.id))
  const handleDelete = () => dispatch(removeTodo(todo.id))
  const handleEditSave = (text: string) => {
    dispatch(editTodo({ id: todo.id, text }))
    setEditing(false)
  }

  return (
    <Item ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} completed={todo.completed}>
      {editing ? (
        <TodoEditForm initialValue={todo.text} onSave={handleEditSave} onCancel={() => setEditing(false)} />
      ) : (
        <>
          <input type='checkbox' checked={todo.completed} onChange={handleToggle} />
          <Text>{todo.text}</Text>
          <IconButton onClick={() => setEditing(true)}>✏️</IconButton>
          <IconButton onClick={handleDelete}>🗑️</IconButton>
        </>
      )}
    </Item>
  )
}
