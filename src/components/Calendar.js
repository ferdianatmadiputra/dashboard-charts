import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { fade, makeStyles } from '@material-ui/core/styles'
import './reactDatePicker.css'
const useStyles = makeStyles((theme) => ({
  headerContainer: {
    margin: 10,
    marginBottom: 20,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  arrowButton: {
    display: 'inline-flex',
    margin: '0 10px',
    padding: '10px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: fade('#DDDDDD', 0.25),
    }
  },
  group: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    fontFamily: 'Montserrat',
    fontWeight: 600,
    fontSize: '16px',
    lineHeight: '150%',
    // display: 'inline-flex',
    // alignItems: 'center',
    textAlign: 'center',
    paddingTop: 0,
    letterSpacing: '0.44px'
  },
  actionContainer: {
    margin: 10,
    marginTop: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cancelButton: {
    border: '1px solid #E5E5E5',
    borderRadius: '4px',
    fontWeight: 600,
    fontSize: 12,
    letterSpacing: '0.25px',
    padding: '10px 30px 10px 30px',
    margin: '0px 5px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: fade('#DDDDDD', 0.25),
    }
  },
  filterButton: {
    background: '#82C341',
    borderRadius: '4px',
    fontWeight: 600,
    fontSize: 12,
    letterSpacing: '0.25px',
    padding: '10px 30px 10px 30px',
    margin: '0px 5px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: fade('#789764', 0.8),
    }
  },
  marginAuto: {
    display:'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  }
}))

export default function Datepicker({filterData, resetData}) {
  const classes = useStyles()
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const formatMonth = (num) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    return months[num]
  }

  const handleCancel = () => {
    setStartDate(new Date())
    setEndDate(null)
    resetData()
  }
  
  const handleFilter = () => {
    console.log(new Date(startDate), 'ini start date')
    console.log(endDate, 'ini end date')
    if (startDate && endDate) {
      filterData(startDate, endDate)
    }
  }

  return (
    <div className={classes.marginAuto}>
      <DatePicker
        renderCustomHeader={({
          date,
          decreaseMonth,
          increaseMonth,
          decreaseYear,
          increaseYear,
        }) => (
          <div className={classes.headerContainer}>
            <div className={classes.group}>
              <div className={classes.arrowButton} onClick={decreaseMonth}>
                <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 17L1 9L9 1" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <span className={classes.headerText}>{formatMonth(date.getMonth())}</span>
              <div className={classes.arrowButton} onClick={increaseMonth}>
                <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 17L9 9L1 1" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
            <div className={classes.group}>
              <div className={classes.arrowButton} onClick={decreaseYear}>
                <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 17L1 9L9 1" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <span className={classes.headerText}>{date.getFullYear()}</span>
              <div className={classes.arrowButton} onClick={increaseYear}>
                <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 17L9 9L1 1" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        )}
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        inline
        formatWeekDay={(nameOfDay) => nameOfDay.substr(0, 1)}
      />

      <div className={classes.actionContainer}>
        <div className={classes.cancelButton} onClick={handleCancel}>
          Cancel
        </div>
        <div className={classes.filterButton} onClick={handleFilter}>
          Filter
        </div>
      </div>
    </div>
  );
}
