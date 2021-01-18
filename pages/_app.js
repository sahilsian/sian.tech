import '../styles/globals.css'
import theme from '../theme'
import MyProvider from '../context'
import {ThemeProvider} from '@material-ui/core'

function MyApp({ Component, pageProps }) {
  return <ThemeProvider theme={theme}><MyProvider><Component {...pageProps} /></MyProvider></ThemeProvider>
}

export default MyApp
