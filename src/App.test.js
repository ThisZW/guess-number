import React from 'react';
import { createShallow } from '@material-ui/core/test-utils'
import App from './App';

describe('App', () => {

    
  let shallow

  beforeAll(() => {
    shallow = createShallow()
  })

  it('renders without crashing', () => {
    const div = shallow(<App/>)
  })

})
