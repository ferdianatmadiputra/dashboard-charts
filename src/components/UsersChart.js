import { useEffect, useState } from 'react'
import HighCharts from "highcharts"
import HighchartsReact from 'highcharts-react-official'
import variablePie from 'highcharts/modules/variable-pie'

variablePie(HighCharts)

export default function UsersChart ({ data }) {
  const [chartData, setChartData] = useState([])

  useEffect(() => {
    formatData()
  }, [data])

  const formatData = () => {
    if (data) {
      let dataSet = []
      let radius = 100
      Object.keys(data).forEach((el) => {
        dataSet.push({
          name: el,
          y: Number(data[el]),
          z: radius
        })
        radius -= 12
      })
      setChartData(dataSet)
    }
  }

  const options = {
    chart: {
      type: "variablepie"
    },
    title: {
      text: ""
    },
    tooltip: {
      headerFormat: "",
      pointFormat: '{point.y}',
      followPointer: false
    },
    series: [{
      sizeBy: 'radius',
      minPointSize: 10,
      zMin: 0,
      data: chartData
    }],
    plotOptions: {
      variablepie: {
        colors: [
          '#5C8F94',
          '#EBA45E',
          '#725E9C',
          '#E4EAEB',
        ],
        shadow: false,
        center: ['50%', '50%'],
        borderWidth: 0,
        dataLabels: {
          enabled: false
        },
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

  return (
    <>
      <HighchartsReact
        highcarts={HighCharts}
        options={options}
      />
    </>
  )
}
