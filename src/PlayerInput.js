import React, { Component } from 'react'
import { TextField, Button, withStyles } from '@material-ui/core'
import styles from './styles'

const defaultState = {
  input: '',
  hasError: false,
  errorText: '',
}

class PlayerInput extends Component{

  constructor(props) {
    super(props)
    this.state = defaultState
  }
  
  handleChange = e => {
    this.setState({
      input: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    let {input} = this.state
    input = parseInt(input)
    console.log(this.state, this.props)
    if(input < this.props.lowerBound || input > this.props.upperBound){
      this.setState({
        hasError: true,
        errorText: "Out of boundary!!!"
      })
    } else {
      this.props.setGuess(input)
      this.setState({
        hasError: false,
        errorText: ''
      })
    }
  }

  render(){
    const {input, hasError, errorText} = this.state
    const {classes} = this.props
    return(
    <form onSubmit={(e) => this.handleSubmit(e)}>
      <TextField
        className={classes.input}
        id="player-input"
        variant="outlined"
        fullWidth
        label="Guess"
        value={input}
        onChange={(e) => this.handleChange(e)}
        type="number"
        error={hasError}
        helperText={errorText}
      />
      <Button type="submit" variant="outlined" color="primary" fullWidth className={classes.button}>
        Make a Guess
      </Button>
    </form>
    )
  }
}

export default withStyles(styles)(PlayerInput)