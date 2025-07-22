import { DragDropContext, Droppable, Draggable, type DropResult } from '@hello-pangea/dnd'
import styled from 'styled-components'

import { useAppDispatch, useAppSelector } from '../../../app/hooks'

import { reorderTodos, selectFilteredTodos } from '../todosSlice'

import { TodoItem } from './TodoItem'

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
`

export const TodosList = () => {
  const dispatch = useAppDispatch()
  const todos = useAppSelector(selectFilteredTodos)

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return
    if (result.source.index === result.destination.index) return
    dispatch(
      reorderTodos({
        sourceIndex: result.source.index,
        destinationIndex: result.destination.index
      })
    )
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId='todos'>
        {(provided) => (
          <List ref={provided.innerRef} {...provided.droppableProps}>
            {todos.map((todo, index) => (
              <Draggable key={todo.id} draggableId={todo.id} index={index}>
                {(prov) => <TodoItem todo={todo} provided={prov} index={index} />}
              </Draggable>
            ))}
            {provided.placeholder}
          </List>
        )}
      </Droppable>
    </DragDropContext>
  )
}
