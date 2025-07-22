import { type FormEvent, useState } from 'react'
import styled from 'styled-components'

import { useAppDispatch } from '../../../app/hooks'

import { addTodo } from '../todosSlice'

const Form = styled.form`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
  margin-bottom: ${({ theme }) => theme.spacing(4)};
`

const Input = styled.input`
  flex: 1;
  padding: ${({ theme }) => theme.spacing(2)};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
`

const Button = styled.button`
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(4)};
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  border-radius: ${({ theme }) => theme.radius.md};
  box-shadow: ${({ theme }) => theme.shadow.sm};
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }
`

export const TodoInput = () => {
  const [text, setText] = useState('')
  const dispatch = useAppDispatch()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!text.trim()) return
    dispatch(addTodo(text.trim()))
    setText('')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        aria-label='New todo'
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder='What needs to be done?'
      />
      <Button type='submit'>Add</Button>
    </Form>
  )
}
