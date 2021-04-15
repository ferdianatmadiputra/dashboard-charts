import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import formatDate from '../helpers/formatDate'

const useStyles = makeStyles((theme) => ({
  root: {
    // background: #FFFFFF;
    // padding: '32px 0 0 0',
    height: '420px',
    overflowY: 'hidden',
    flex: 1
  },
  cardTitle: {
    color: '#333333',
    fontWeight: 700,
    fontSize: 24,
    marginBottom: 20,
    marginTop: 10
  },
  tableContainer: {
    height: '391px',
    width: '100%',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    // display: 'flex',
  },
  thead: {
    display: 'flex',
    // width: '100%',
    height: '60px',
    alignItems: 'center',
    // paddingTop: 20,
    boxShadow: 'inset 0px -2px 0px rgba(0, 0, 0, 0.25)',
    backgroundColor: '#F5F5F5',
    textAlign: 'left',
    fontSize: 12,
  },
  headerRow: {
    display: 'flex',
    width: '100%',
  },
  th: {
    fontWeight: '600',
    lineHeight: '20px',
    textAlign: 'left',
    // whiteSpace: 'pre-wrap',
    position: 'sticky',
    top: '0px',
    display: 'flex',
    alignItems: 'center',
  },
  tbody: {
    width: '100%',
    fontFamily: 'Encode Sans',
    fontWeight: 'normal',
    fontSize: '12px',
    lineHeight: '20px',
    color: '#333333',
    letterSpacing: '0.25px',
    height: '332px',
    overflowY: 'auto',
    display: 'block',
  },
  tableRow: {
    height: '56px',
    display: 'flex',
    alignItems: 'center',
    boxShadow: 'inset 0px -1px 0px #E5E5E5',
    '&:hover': {
      backgroundColor: '#EFF7FF'
    }
  },
  badge: {
    borderRadius: '4px',
    width: '95.4px',
    height: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffffff'
  },
  completed: {
      backgroundColor: '#789764'
  },
  pending: {
      backgroundColor: '#E69849'
  },
  canceled: {
      backgroundColor: '#D66D4B'
  },
  column1: {
    flex: 100
  },
  column2: {
    flex: 159
  },
  column3: {
    flex: 190
  },
  column4: {
    flex: 196
  },
  column5: {
    flex: 159
  },
  column6: {
    flex: 159
  },
}))

export default function OrdersTable ({ data }) {
  const classes = useStyles()

  useEffect(() => {
    console.log(data)
  }, [data])

  const formatId = (id) => {
    return id.split("-")[2];
  }
  
  if (data.length === 0) {
    return <p>No Data</p>
  }

  return (
    <div className={classes.root} >
      <div className={classes.cardTitle}>Orders</div>
      <div className={classes.tableContainer}>
        <table className={classes.table}>
          <thead className={classes.thead}>
            <tr className={classes.headerRow}>
              <th className={`${classes.column1} ${classes.th}`}>Order Number</th>
              <th className={`${classes.column2} ${classes.th}`}>Status</th>
              <th className={`${classes.column3} ${classes.th}`}>Operator</th>
              <th className={`${classes.column4} ${classes.th}`}>Location</th>
              <th className={`${classes.column5} ${classes.th}`}>Start Date</th>
              <th className={`${classes.column6} ${classes.th}`}>Due Date</th>
            </tr>
          </thead>
          <tbody className={classes.tbody}>
            {
              data.map((el, i) => (
                <tr key={i} className={classes.tableRow}>
                  <td className={classes.column1}>
                    #{formatId(el.order_id)}
                  </td>
                  <td className={classes.column2}>
                    <div className={`${classes[el.status]} ${classes.badge}`}>
                      {el.status}
                    </div>
                  </td>
                  <td className={classes.column3}>
                    {el.full_name}
                  </td>
                  <td className={classes.column4}>
                    {el.location}
                  </td>
                  <td className={classes.column5}>
                    {formatDate(el.start_date)}
                  </td>
                  <td className={classes.column6}>
                    {formatDate(el.due_date)}
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

