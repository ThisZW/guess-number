import React from 'react'
import GameBoard from './GameBoard'
import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  typography: {
    htmlFontSize: 18
  }
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GameBoard/>
    </ThemeProvider>
  );
}

export default App;
