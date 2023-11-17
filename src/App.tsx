import { SettingsProvider } from './components/theme'
import { Layout } from './components/layout'
import { Constructor } from './components/constructor'
import { Congrats } from './components/congrats'
import { useRouter } from './hooks/useRouter'

function App() {
  const { query } = useRouter()

  return (
    <SettingsProvider>
      <Layout>{query ? <Congrats query={query} /> : <Constructor />}</Layout>
    </SettingsProvider>
  )
}

export default App
