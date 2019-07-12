import { createStyles } from '@material-ui/styles'

const styles = theme => createStyles({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(3),
  },
  paper: {
    height: "100%",
    padding: theme.spacing(3,2),
    textAlign: 'center',
    color: theme.palette.text.primary,
    '& h5':{
      marginBottom: theme.spacing(1),
    }
  },
  appTitle: {
    margin: "auto"
  },
  input: {
    margin: theme.spacing(1, 0)
  },
  button: {
    marginTop: theme.spacing(1)
  }
})

export default styles