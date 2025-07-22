import { configureStore, type Middleware } from '@reduxjs/toolkit'

import { loadState, saveState } from '../lib/localStorage'

import { todosSlice } from '../features/todos/todosSlice'

const preloadedState = loadState()

const localStorageMiddleware: Middleware = (storeAPI) => (next) => (action) => {
  const result = next(action)
  saveState({ todos: storeAPI.getState().todos })
  return result
}

export const store = configureStore({
  reducer: {
    todos: todosSlice.reducer
  },
  preloadedState,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
