import { useEffect, useState } from "react"
import { fade, makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Preload from '../components/Preload'
import ConversionChart from '../components/ConversionChart'
import UsersChart from '../components/UsersChart'
import RevenueChart from '../components/RevenueChart'
import Calendar from '../components/Calendar.js'
import OrdersTable from '../components/OrdersTable'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 115,
    flexGrow: 1,
    padding: 5
  },
  item: {
    padding: 5,
    marginTop: 10,
  },
  paper: {
    height: '420px',
    borderColor: '#E5E5E5',
    padding: 32,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  cardTitle: {
    color: '#333333',
    fontWeight: 700,
    fontSize: 24,
  },
  cardHeaderButton: {
    border: '1px solid #E5E5E5',
    cursor: 'pointer',
    boxSizing: 'border-box',
    borderRadius: '4px',
    width: 32,
    height: 32,
    textAlign: 'center',
    '&:hover': {
      backgroundColor: fade('#DDDDDD', 0.25),
    },
  }
}));

export default function Home () {
  const classes = useStyles()
  const [ data, setData ] = useState({})
  const [ sourceData, setSourceData ] = useState({})
  const [ loading, setLoading ] = useState(false)
  const [ error, setError ] = useState(false)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      setLoading(true)
      const response = await fetch('https://ecdba7fe-ec10-4d90-8d0e-80f8364c7624.mock.pstmn.io/takehometest/frontend/web/dashboard')
      if (!response.ok) {
        console.log(response, 'ini yg response not oke')
        throw Error(response.statusText)
      } else {
        const result = await response.json()
        setData(result.data)
        setSourceData(result.data)
        setLoading(false)
      }
    } catch (err) {
      console.log(err)
      setError(err)
      setLoading(false)
    }
  }
  const resetData = () => {
    setData(sourceData)
  }
  const filterData = (startDate, endDate) => {
    let filterStart = new Date(startDate)
    let filterEnd = new Date(endDate)
    let newOrderData = sourceData.orders.filter(el => {
      return (
        new Date(el.start_date) >= filterStart
        && new Date(el.start_date) <= filterEnd)
      ||
      (new Date(el.due_date) >= filterStart
      && new Date(el.due_date) <= filterEnd)
    })
    setData({...sourceData, orders: newOrderData})
  }

  if (loading || !data.orders) {
    return <Preload />
  }
  if (error) {
    return <p>{JSON.stringify(error)}</p>
  }
  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={6} lg={3} className={classes.item}>
          <Paper elevation={0} variant="outlined" className={classes.paper}>
            <div className={classes.cardHeader}>
              <div className={classes.cardTitle}>Conversion</div>
              <div className={classes.cardHeaderButton}>
                <svg width="12" height="4" viewBox="0 0 12 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M1.33333 3.33341C0.596954 3.33341 0 2.73646 0 2.00008C0 1.2637 0.596954 0.666748 1.33333 0.666748C2.06971 0.666748 2.66667 1.2637 2.66667 2.00008C2.66667 2.73646 2.06971 3.33341 1.33333 3.33341ZM6 3.33341C5.26362 3.33341 4.66667 2.73646 4.66667 2.00008C4.66667 1.2637 5.26362 0.666748 6 0.666748C6.73638 0.666748 7.33333 1.2637 7.33333 2.00008C7.33333 2.73646 6.73638 3.33341 6 3.33341ZM9.33333 2.00008C9.33333 2.73646 9.93029 3.33341 10.6667 3.33341C11.403 3.33341 12 2.73646 12 2.00008C12 1.2637 11.403 0.666748 10.6667 0.666748C9.93029 0.666748 9.33333 1.2637 9.33333 2.00008Z" fill="#333333"/>
                </svg>
              </div>
            </div>
            <ConversionChart data={data.orders} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={3} className={classes.item}>
          <Paper elevation={0} variant="outlined" className={classes.paper}>
            <div className={classes.cardHeader}>
              <div className={classes.cardTitle}>Users</div>
              <div className={classes.cardHeaderButton}>
                <svg width="12" height="4" viewBox="0 0 12 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M1.33333 3.33341C0.596954 3.33341 0 2.73646 0 2.00008C0 1.2637 0.596954 0.666748 1.33333 0.666748C2.06971 0.666748 2.66667 1.2637 2.66667 2.00008C2.66667 2.73646 2.06971 3.33341 1.33333 3.33341ZM6 3.33341C5.26362 3.33341 4.66667 2.73646 4.66667 2.00008C4.66667 1.2637 5.26362 0.666748 6 0.666748C6.73638 0.666748 7.33333 1.2637 7.33333 2.00008C7.33333 2.73646 6.73638 3.33341 6 3.33341ZM9.33333 2.00008C9.33333 2.73646 9.93029 3.33341 10.6667 3.33341C11.403 3.33341 12 2.73646 12 2.00008C12 1.2637 11.403 0.666748 10.6667 0.666748C9.93029 0.666748 9.33333 1.2637 9.33333 2.00008Z" fill="#333333"/>
                </svg>
              </div>
            </div>
            <UsersChart data={data.user_category} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} lg={6} className={classes.item}>
          <Paper elevation={0} variant="outlined" className={classes.paper}>
            <RevenueChart data={data.orders}/>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} lg={4} className={classes.item}>
          <Paper elevation={0} variant="outlined" className={classes.paper}>
            <Calendar filterData={filterData} resetData={resetData}/>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} lg={8} className={classes.item}>
          <Paper elevation={0} variant="outlined" className={classes.paper}>
            <OrdersTable data={data.orders}/>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}