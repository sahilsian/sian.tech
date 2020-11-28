import '../styles/globals.css'
import MyProvider from '../context'
import {ThemeProvider} from '@material-ui/core'
import theme from '../theme'

function MyApp({ Component, pageProps }) {
  return <ThemeProvider theme={theme}><MyProvider><Component {...pageProps} /></MyProvider></ThemeProvider>
}

export default MyApp
