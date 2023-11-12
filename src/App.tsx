import { ThemeProvider } from './components/theme'
import { Layout } from './components/layout'
import { FormInput } from './components/form/input'
import { FormText } from './components/form/text'
import { FormSubmit } from './components/form/submit'
import queryString from './utils/query'

function App() {
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = new FormData(event.target as HTMLFormElement)
    // const value = String(form.get('name'));
    const data: Record<string, string> = {}
    for (const [key, value] of form.entries()) {
      data[key] = String(value)
    }
    console.log(data)
    console.log(queryString(data))
  }

  return (
    <ThemeProvider>
      <Layout>
        <form onSubmit={submitHandler} style={{ width: '70%' }}>
          <FormInput type="text" name="name" placeholder="Имя получателя поздравления" error={false} errorMessage="Проверьте имя" />
          <FormText name="text" placeholder="Текст поздравления" error={false} errorMessage="Напишите своё поздравление" />
          <FormSubmit>Создать</FormSubmit>
        </form>
      </Layout>
    </ThemeProvider>
  )
}

export default App
