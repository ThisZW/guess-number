import React, {Component} from 'react'
import { withStyles} from '@material-ui/styles'
import {Container, Grid, Paper, AppBar, Toolbar, Typography} from '@material-ui/core'
import Config from './Config'
import PlayerInput from './PlayerInput'
import styles from './styles'

const defaultState = {
  lowerBound: 0,
  upperBound: 10,
  currentGuess: null,
  answer: null,
  outputText: '',
  found: false
}

class GameBoard extends Component {

  constructor(props) {
    super(props)
    this.state = defaultState
  }
  
  componentDidMount = () => {
    this.setAnswer()
  }
  
  setAnswer = () => {
    const {lowerBound, upperBound} = this.state
    let randAnswer = Math.floor(Math.random() * upperBound - lowerBound) + lowerBound
    this.setState({
      answer: randAnswer
    })
  }

  setNewConfig = (lowerBound, upperBound) => {
    this.setState(defaultState, ()=>{
      this.setState({
        lowerBound: lowerBound,
        upperBound: upperBound
      }, () => {
        this.setAnswer()
      })
    })
  }
  
  setGuess = (input) => {
    if(!this.state.found){
      this.setState({
        currentGuess: input
      },()=>{
        if(input === this.state.answer){
          this.setState({
            outputText: "You Got it!",
            found: true
          })
        } else if(input < this.state.answer){
          this.setState({
            outputText: "Nope. Lower",
          })
        } else {
          this.setState({
            outputText: "Nope. Higher",
          })
        }
      })
    }
  }

  render(){
    const { classes } = this.props
    const {lowerBound, upperBound, currentGuess, outputText} = this.state
    return(
    <>
      <div className={classes.root}>
        <AppBar position="static" color="default" >
          <Toolbar>
            <Typography variant="h4" color="inherit" align="center" className={classes.appTitle}>
              Guess the Number!
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
      <Container maxWidth="md">
        <Grid container
              direction="row"
              justify="center"
              alignItems="stretch" 
              spacing={5}>
          <Grid item md={6} xs={12}>
            <Paper className={classes.paper}>
              <Typography variant="h5">Play:</Typography>
              <Typography variant="h6">Guess the Number between {lowerBound} and {upperBound}</Typography>
              <PlayerInput lowerBound={lowerBound} upperBound={upperBound} setGuess={this.setGuess}/>
              <Typography variant="h6">{currentGuess && `Last guess: ${currentGuess}`}</Typography>
              <Typography variant="h6">{outputText}</Typography>
            </Paper>
          </Grid>
          <Grid item md={6} xs={12}>
            <Paper className={classes.paper}>
              <Config setNewConfig={this.setNewConfig}/>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
    )
  }
}

export default withStyles(styles)(GameBoard)