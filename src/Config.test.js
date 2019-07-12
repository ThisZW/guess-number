import React from 'react';
import { createMount } from '@material-ui/core/test-utils'
import Config from './Config';
import { ThemeProvider} from '@material-ui/styles';
import { createMuiTheme, Divider } from '@material-ui/core'

describe('Config', () => {

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
    const config = mount(<MockTheme><Config/></MockTheme>)
  })
  
})
