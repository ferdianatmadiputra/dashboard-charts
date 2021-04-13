import { useEffect, useState } from "react"
import { makeStyles } from '@material-ui/core/styles'
// import { useSelector, useDispatch } from "react-redux";
// import { fetchSongs } from "../store/actions";
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 5
  },
  item: {
    padding: 5,
  },
  // paper: {
  //   padding: theme.spacing(2),
  //   textAlign: 'center',
  //   color: theme.palette.text.secondary,
  // },
  paper: {
    borderColor: '#E5E5E5'
  }
}));

export default function Home () {
  const classes = useStyles()
  // const songs = useSelector((state) => state.songs.songs)
  // const dispatch = useDispatch()
  const [localState, setLocalState] = useState('')

  // useEffect(() => {
  //   dispatch(fetchSongs())
  // }, [dispatch])

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={6} lg={3} className={classes.item}>
          <Paper elevation={0} variant="outlined" className={classes.paper}>
          Conversion
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={3} className={classes.item}>
          <Paper elevation={0} variant="outlined" className={classes.paper}>
          Users
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} lg={6} className={classes.item}>
          <Paper elevation={0} variant="outlined" className={classes.paper}>
          Revenue
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}