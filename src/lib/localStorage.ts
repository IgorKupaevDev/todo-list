import { LS_KEY } from '../utils/constants'

export function loadState<T = unknown>(): T | undefined {
  try {
    const serialized = window.localStorage.getItem(LS_KEY)
    if (!serialized) return undefined
    return JSON.parse(serialized) as T
  } catch (e) {
    console.error(e)

    return undefined
  }
}

export function saveState<T>(state: T): void {
  try {
    const serialized = JSON.stringify(state)
    window.localStorage.setItem(LS_KEY, serialized)
  } catch (e) {
    console.error(e)
  }
}
