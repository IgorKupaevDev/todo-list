export const LS_KEY = 'todo-state' as const

export enum Filter {
  All = 'all',
  Active = 'active',
  Completed = 'completed'
}

export const FILTERS_ORDER: Filter[] = [Filter.All, Filter.Active, Filter.Completed]
