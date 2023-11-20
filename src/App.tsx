import React from 'react'
import { useRouter } from '~/hooks/useRouter'
import { SettingsProvider } from '@/context'
import { Layout } from '@/layout'
import { SuspenseIndicator } from '@/modal'
import { Constructor } from '@/constructor'
import { Congrats } from '@/congrats'

function App() {
  const { query } = useRouter()
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    setLoading(!(document.readyState === 'interactive' || document.readyState === 'complete'))
  }, [])

  return (
    <SettingsProvider>
      <Layout>{query ? <Congrats query={query} /> : <Constructor />}</Layout>
      {loading && <SuspenseIndicator />}
    </SettingsProvider>
  )
}

export default App
