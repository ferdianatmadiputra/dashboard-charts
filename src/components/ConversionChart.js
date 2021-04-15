import HighchartsReact from 'highcharts-react-official'
import HighCharts from "highcharts"
import React, { useEffect, useState } from 'react'

export default function ConversionChart ({ data }) {
  const [chartData, setChartData] = useState([])

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
        if (obj[el.conversion_item]) {
          obj[el.conversion_item] += +el.conversion_revenue
        } else {
          obj[el.conversion_item] = +el.conversion_revenue
        }
      })
      let dataSet = []
      Object.keys(obj).forEach((el) => {
        dataSet.push({
          name: el,
          y: obj[el]
        })
      })
      setChartData(dataSet)
    }
  }

  const options = {
    chart: {
      type: "pie"
    },
    title: {
      text: ""
    },
    tooltip: {
      headerFormat: "",
      pointFormat: '$ {point.y}',
      followPointer: false
    },
    series: [{
      data: chartData
    }],
    plotOptions: {
      pie: {
        colors: [
          '#725E9C',
          '#5C8F94',
          '#EBA45E',
          '#E4EAEB',
        ],
        shadow: false,
        borderWidth: 0,
        dataLabels: {
          enabled: false
        },
        center: ['50%', '50%'],
        showInLegend: true
      },
    },
    credits: {
      enabled: false
    },
    legend: {
      itemStyle: {
        color: "#9c9c9c",
        fontSize: "10px",
        fontFamily: "Montserrat",
        fontWeight: 400 ,
        letterSpacing: '0.4px'

      },
      symbolPadding: 5,
      itemMarginTop: 6
    }
  }

  if (data.length === 0) {
    return <p>No Data</p>
  }

  return (
    <>
      <HighchartsReact
        highcarts={HighCharts}
        constructorType="chart"
        options={options}
      />
    </>
  )
}