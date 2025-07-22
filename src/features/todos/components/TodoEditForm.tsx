import { type FormEvent, useState } from 'react'
import styled from 'styled-components'

const Form = styled.form`
  display: flex;
  flex: 1;
  gap: ${({ theme }) => theme.spacing(2)};
`

const Input = styled.input`
  flex: 1;
  padding: ${({ theme }) => theme.spacing(2)};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
`

const Button = styled.button`
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(3)};
  border-radius: ${({ theme }) => theme.radius.md};
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
`

interface Props {
  initialValue: string
  onSave: (text: string) => void
  onCancel: () => void
}

export const TodoEditForm = ({ initialValue, onSave, onCancel }: Props) => {
  const [value, setValue] = useState(initialValue)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!value.trim()) return
    onSave(value.trim())
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input value={value} onChange={(e) => setValue(e.target.value)} />
      <Button type='submit'>Save</Button>
      <Button type='button' onClick={onCancel}>
        Cancel
      </Button>
    </Form>
  )
}
