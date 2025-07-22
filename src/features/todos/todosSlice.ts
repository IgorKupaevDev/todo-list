import { createEntityAdapter, createSlice, nanoid, type PayloadAction } from '@reduxjs/toolkit'

import { Filter } from '../../utils/constants'

import type { RootState } from '../../app/store'
import type { Todo } from '../../types/todo'

const todosAdapter = createEntityAdapter<Todo>()

type TodosState = ReturnType<typeof todosAdapter.getInitialState> & {
  filter: Filter
}

const initialState: TodosState = {
  ...todosAdapter.getInitialState(),
  filter: Filter.All
}

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: {
      reducer: (state, action: PayloadAction<Todo>) => {
        todosAdapter.addOne(state, action.payload)
      },
      prepare: (text: string) => ({
        payload: {
          id: nanoid(),
          text,
          completed: false
        } as Todo
      })
    },
    toggleCompleted: (state, action: PayloadAction<string>) => {
      const id = action.payload
      const todo = state.entities[id]
      if (todo) {
        todo.completed = !todo.completed
      }
    },
    removeTodo: todosAdapter.removeOne,
    editTodo: (state, action: PayloadAction<{ id: string; text: string }>) => {
      const { id, text } = action.payload
      const todo = state.entities[id]
      if (todo) todo.text = text
    },
    reorderTodos: (state, action: PayloadAction<{ sourceIndex: number; destinationIndex: number }>) => {
      const { sourceIndex, destinationIndex } = action.payload
      const ids = state.ids as string[]
      const [removed] = ids.splice(sourceIndex, 1)
      ids.splice(destinationIndex, 0, removed)
    },
    setFilter: (state, action: PayloadAction<Filter>) => {
      state.filter = action.payload
    }
  }
})

const baseSelectors = todosAdapter.getSelectors<RootState>((s) => s.todos)

export const selectAllTodos = baseSelectors.selectAll
export const selectTodoById = baseSelectors.selectById
export const selectTodoIds = baseSelectors.selectIds

export const selectFilteredTodos = (state: RootState) => {
  const { filter } = state.todos as TodosState
  const all = selectAllTodos(state)
  switch (filter) {
    case Filter.Active:
      return all.filter((todo) => !todo.completed)
    case Filter.Completed:
      return all.filter((todo) => todo.completed)
    default:
      return all
  }
}

export const { addTodo, toggleCompleted, removeTodo, editTodo, reorderTodos, setFilter } = todosSlice.actions
