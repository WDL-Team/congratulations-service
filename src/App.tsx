import { ThemeProvider } from './components/theme'
import { Layout } from './components/layout'
import DeleteMe from './deleteme'

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <DeleteMe />
      </Layout>
    </ThemeProvider>
  )
}

export default App
