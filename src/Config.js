import React, {Component} from 'react'
import { withStyles} from '@material-ui/styles'
import { TextField, Typography, Button} from '@material-ui/core'
import styles from './styles'

const defaultState = {
  lowerBound: 0,
  upperBound: 10,
  hasError: false,
  errorText: '',
}

class Config extends Component{

  constructor(props) {
    super(props)
    this.state = defaultState
  }
  
  handleSubmit = (e) =>{
    e.preventDefault()
    let { lowerBound, upperBound }  = this.state
    const { setNewConfig } = this.props
    lowerBound = parseInt(lowerBound)
    upperBound = parseInt(upperBound)
    if(lowerBound >= upperBound){
      this.setState({
        hasError: true,
        errorText: "Lower Bound is always < Upper Bound!!!"
      })
    } else {
      setNewConfig(lowerBound, upperBound)
      this.setState({
        hasError: false,
        errorText: ''
      })
    }
  }

  handleChange = (e) => {
    if(e.target.id === 'lower-bound-input')
      this.setState({
        lowerBound: e.target.value
      })
    else if(e.target.id === 'upper-bound-input')
      this.setState({
        upperBound: e.target.value
      })
  }


  render() {
    const { classes } = this.props
    const { lowerBound, upperBound, hasError, errorText } = this.state
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <Typography variant="h5">Config:</Typography>
        <TextField
          className={classes.input}
          id="lower-bound-input"
          variant="outlined"
          fullWidth
          label="Lower Bound"
          value={lowerBound}
          onChange={(e) => this.handleChange(e)}
          type="number"
          error={hasError}
          helperText={errorText}
          required
        />
        <TextField
          className={classes.input}
          id="upper-bound-input"
          variant="outlined"
          fullWidth
          label="Upper Bound"
          value={upperBound}
          onChange={(e) => this.handleChange(e)}
          type="number"
          error={hasError}
          helperText={errorText}
          required
        />
        <Button type="submit" variant="outlined" color="primary" fullWidth className={classes.button}>
          Save and Restart the game
        </Button>
      </form>
    )
  }
}

export default withStyles(styles)(Config)