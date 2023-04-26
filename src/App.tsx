import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./stytes/themes/default"
import { GlobalStyled } from "./stytes/global"

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
    <GlobalStyled />
        <h1>Olá, mundo!</h1>
     </ThemeProvider>
  )
}

