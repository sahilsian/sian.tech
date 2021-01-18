import {createMuiTheme} from '@material-ui/core'
import {green} from '@material-ui/core/colors'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#36a36f"
        },
        secondary: {
            main: "#FFFFFF"
        },
        error: {
            main: "#f44336"
        },
        success: {
            main: "#2ea44f"
        }
    }
})

export default theme;