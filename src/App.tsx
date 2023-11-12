import { ThemeProvider } from './components/theme'
import { Layout } from './components/layout'
import { FormInput } from './components/form/input'
// import { FormText } from './components/form/formText'

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <form>
          <FormInput type="text" name="name" placeholder="Имя получателя поздравления" error={false} errorMessage="Проверьте имя" />
          {/* <FormText name="name" placeholder="Текст поздравления" error={false} errorMessage="Напишите своё поздравление" /> */}
          <input type="submit" />
        </form>
      </Layout>
    </ThemeProvider>
  )
}

export default App
