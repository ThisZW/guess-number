import React from 'react';
import { createMount } from '@material-ui/core/test-utils'
import GameBoard from './GameBoard';
import { ThemeProvider} from '@material-ui/styles';
import { createMuiTheme, Divider } from '@material-ui/core'

describe('GameBoard', () => {

  const theme = createMuiTheme({
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    typography: {
      htmlFontSize: 18
    }
  });

  let mount

  const MockTheme = ({ children }) => {
    return (
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    );
  }

  beforeAll(() => {
    mount = createMount()
  })



  it('renders without crashing', () => {
    const board = mount(<MockTheme><GameBoard/></MockTheme>)
  })

  it('random answer is between 0 and 100', () => {
    const boardWrapper = mount(<MockTheme><GameBoard/></MockTheme>)
    const board = boardWrapper.find("GameBoard").at(0)
    board.instance().setNewConfig(0, 100)
    expect(board.state('answer')).toBeGreaterThanOrEqual(0)
    expect(board.state('answer')).toBeLessThanOrEqual(100)
  })
  
})
