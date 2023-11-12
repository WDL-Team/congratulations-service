import { ThemeProvider } from './components/theme'
import { Layout } from './components/layout'
import { Constructor } from './components/constructor'
import { Congrats } from './components/congrats'
import { useRouter } from './hooks/useRouter'

function App() {
  const { query } = useRouter()

  return (
    <ThemeProvider>
      <Layout>{query ? <Congrats query={query} /> : <Constructor />}</Layout>
    </ThemeProvider>
  )
}

export default App
