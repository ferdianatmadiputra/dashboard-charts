import React, { useEffect, useState } from 'react'
import Highcharts from "highcharts/highstock"
import HighchartsReact from 'highcharts-react-official'
import { fade, makeStyles } from '@material-ui/core/styles'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const useStyles = makeStyles((theme) => ({
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
  },
  revenueLabel: {
    color: '#9C9C9C',
    letterSpacing: '0.4px',
    fontSize: 12,
    fontWeight: 600,
  },
  totalRevenue: {
    color: '#333333',
    // letterSpacing: '0.4px',
    fontSize: 24,
    fontWeight:700,
  },
  revenueSubtitle: {
    color: '#5F9F2F',
    letterSpacing: '0.4px',
    fontSize: 12,
    fontWeight:500,
  },
  infoContainer: {
    marginTop: 30
  }
}))

export default function RevenueChart ({ data }) {
  const classes = useStyles()
  const [chartData, setChartData] = useState([])
  const [revenue, setRevenue] = useState(0)
  const [percentage, setPercentage] = useState(100)

  useEffect(() => {
    formatData()
  }, [data])

  useEffect(() => {
    console.log(data)
  }, [data])

  const formatData = () => {
    let obj = {}
    if (data) {
      data.forEach((el) => {
        let date = new Date(el.start_date)
        let key = `${date.getUTCDate()}-${date.getUTCMonth()}-${date.getUTCFullYear()}`
        if (obj[key]) {
          obj[key].value += +el.conversion_revenue
        } else {
          obj[key] = {
            date,
            value: +el.conversion_revenue
          }
        }
      })
      let dataSet = []
      let total = 0
      Object.keys(obj).forEach((el) => {
        total += obj[el].value
        dataSet.push([
          obj[el].date.getTime(),
          obj[el].value,
        ])
      })
      setChartData(dataSet)
      setRevenue(total)
    }
  }

  const options = {
    chart: {
      height: "300px"
    },
    rangeSelector: {
      inputStyle: {
        color: "#333",
        fontSize: "14px",
        fontFamily: "Montserrat, sans-serif",
        fontWeight: "600",
        border: '1px solid #E5E5E5',

      },
      // inputEnabled: false,
      buttons: [],
    },
    series: [
      {
        type: 'areaspline',
        data: chartData,
        lineColor: "#789764",
        fillColor: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1
          },
          stops: [
            [0, "rgba(120, 151, 100, 0.65)"],
            // [0, "#78976"],
            [1, "#ffffff"]
          ],
          borderColor: "#789764",
        },
      }
    ],
    yAxis: {
      floor: 0,
      opposite: false,
      lineWidth: 1,
      lineColor: '#E5E5E5',
      labels: {
        formatter: function () {
          return `$${this.value / 1000}k`
        },
        style: {
          color: "#9c9c9c",
          fontSize: "10px",
          fontFamily: "Montserrat",
          fontWeight: "400"
        }
      },
      gridLineWidth: 0,
    },
    xAxis: {
      labels: {
        style: {
          color: "#9c9c9c",
          fontSize: "10px",
          fontFamily: "Montserrat",
          fontWeight: "400"
        }
      },
      gridLineWidth: 1,
    },
    navigator: {
      enabled: false
    },
    scrollbar: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    tooltip: {
      headerFormat: ""
    }
  };

  if (data.length === 0) {
    return <p>No Data</p>
  }
  
  return (
    <div>
      <div className={classes.cardHeader}>
        <div className={classes.cardTitle}>Revenue</div>
        {/* <div className={classes.cardHeaderButton}></div> */}
      </div>
      <div>
        <HighchartsReact
          highcharts={Highcharts}
          constructorType={'stockChart'}
          options={options}
          className={classes.chart}
        />
      </div>
      <div className={classes.infoContainer}>
        <div className={classes.revenueLabel}>
          Total Revenue
        </div>
        <div className={classes.totalRevenue}>
          ${revenue}
        </div>
        <div>
          <span className={classes.revenueSubtitle}>
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6.66658V1.33325" stroke="#5F9F2F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2 3.33325L4 1.33325L6 3.33325" stroke="#5F9F2F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
           &nbsp;{percentage}%
          </span>
        </div>
      </div>
    </div>
  )
}
