import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'

import { Layout } from './components/Layout'
import { Header } from './components/Header'

import { TodoFilter } from './features/todos/components/TodoFilter'
import { TodoInput } from './features/todos/components/TodoInput'
import { TodosList } from './features/todos/components/TodosList'

import { theme } from './styles/theme'
import { store } from './app/store'
import { GlobalStyle } from './styles/GlobalStyle'

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Provider store={store}>
        <Layout>
          <Header />
          <TodoInput />
          <TodoFilter />
          <TodosList />
        </Layout>
      </Provider>
    </ThemeProvider>
  )
}
