import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import logo from '../assets/logo.svg'
import Avatar from '@material-ui/core/Avatar'
import Badge from '@material-ui/core/Badge'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'sticky',
    flexGrow: 1,
    backgroundColor: '#ffffff',
    boxShadow: 'none',
  },
  toolbar: {
    justifyContent: "space-between",
    paddingRight: 11,
    paddingLeft: 15,
    paddingTop: 5,
    paddingBottom: 5
  },
  navRight: {
    display: 'flex',
    height: '88 dp',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  navLeft: {
    color: 'black',
    display: 'flex',
    height: '88 dp',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  logobareksa: {
    padding: '10px'
  },
  search: {
    position: 'relative',
    border: '1px solid #DDDDDD',
    borderRadius: 5,
    backgroundColor: fade('#ffffff', 0.15),
    '&:hover': {
      backgroundColor: fade('#DDDDDD', 0.25),
    },
    marginLeft: 0,
    width: '100%',
    height: '100',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    // width: '100%',
    // display: 'inline',
    position: 'absolute',
    right: '-0.5ch',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#333333'
  },
  inputRoot: {
    color: '#9c9c9c',
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    fontSize: 12,
    width: '220px',
    height: '45px'
  },
  inputInput: {
    fontFamily: 'Montserrat',
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: '1em',
    // vertical padding + font size from searchIcon
    paddingRight: `calc(1em + 2em)`,
    // transition: theme.transitions.create('width'),
    width: '12ch',
    color: '#000000',

    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  icon: {
    padding: 9,
    borderRadius: 4,
    marginLeft: 12,
    position: 'relative',
    color: '#ffffff',
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: fade('#DDDDDD', 0.25)
    }
  },
  badge: {
    borderRadius: '50%',
    width: '7px',
    height: '7px',
    backgroundColor: '#c25b3a',
    position: 'absolute',
    top: '0',
    right: '0'
  },
  profileContainer: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 5,
    paddingBottom: 5,
    paddingTop: 5,
    borderRadius: 4,
    marginLeft: 45,
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: fade('#DDDDDD', 0.25)
    }
  },
  avatar: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(144, 144, 144, 0.1)',
  },
  username: {
    fontWeight: 'bold',
    letterSpacing: '0.44px',
    fontSize: 14,
  },
  address: {
    fontSize: 10,
    letterSpacing: '0.4px',
  },
  nameContainer: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  subMenu: {
    backgroundColor: '#F5F5F5',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    color: '#333333',
    fontSize: 10,
    fontWeight: 600,
    letterSpacing: '0.4px',
    paddingRight: 20,
    paddingBottom: 14,
    paddingTop: 14
  }
}));

export default function TopMenu() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" className={classes.root}>
        <Toolbar className={classes.toolbar}>
        <Grid container spacing={0}>
          <Grid item xs={12} sm={6} className={classes.navLeft} >
            <div>
              <img src={logo} alt='bareksa logo' height="32" className={classes.logobareksa} />
            </div>
            <div className={classes.profileContainer}>
              <Avatar className={classes.avatar}>RH</Avatar>
              <div className={classes.nameContainer}>
                <div className={classes.username}>
                  Reinhart H.
                </div>
                <div className={classes.address}>
                  Kemang, Jakarta
                </div>
              </div>
              <div className={classes.icon}>
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L5 5L9 1" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.navRight}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18Z" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M21 21L15.8 15.8" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <InputBase
                placeholder="Search text"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                // inputProps={{ 'aria-label': 'search' }}
              />
            </div>
            <div className={classes.icon}>
              <div className={classes.badge} />
              <svg width="16" height="17" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 15C0.447715 15 0 15.4477 0 16C0 16.5523 0.447715 17 1 17V15ZM4 8H3H4ZM18 8H19H18ZM12.73 20L13.595 20.5018C13.7744 20.1924 13.775 19.8108 13.5965 19.5009C13.418 19.191 13.0876 19 12.73 19V20ZM9.27 20V19C8.91237 19 8.58196 19.191 8.40346 19.5009C8.22497 19.8108 8.22555 20.1924 8.405 20.5018L9.27 20ZM21 15H1V17H21V15ZM1 17C3.20914 17 5 15.2091 5 13H3C3 14.1046 2.10457 15 1 15V17ZM5 13V8H3V13H5ZM5 8C5 4.68629 7.68629 2 11 2V0C6.58172 0 3 3.58172 3 8H5ZM11 2C14.3137 2 17 4.68629 17 8H19C19 3.58172 15.4183 0 11 0V2ZM17 8V13H19V8H17ZM17 13C17 15.2091 18.7909 17 21 17V15C19.8954 15 19 14.1046 19 13H17ZM11.865 19.4982C11.6861 19.8066 11.3565 19.9965 11 19.9965V21.9965C12.0696 21.9965 13.0583 21.427 13.595 20.5018L11.865 19.4982ZM11 19.9965C10.6435 19.9965 10.3139 19.8066 10.135 19.4982L8.405 20.5018C8.9417 21.427 9.9304 21.9965 11 21.9965V19.9965ZM9.27 21H12.73V19H9.27V21Z" fill="#333333"/>
              </svg>
            </div>
            <div className={classes.icon}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.4 15C19.1277 15.6171 19.2583 16.3378 19.73 16.82L19.79 16.88C20.1656 17.2551 20.3766 17.7642 20.3766 18.295C20.3766 18.8258 20.1656 19.3349 19.79 19.71C19.4149 20.0856 18.9058 20.2966 18.375 20.2966C17.8442 20.2966 17.3351 20.0856 16.96 19.71L16.9 19.65C16.4178 19.1783 15.6971 19.0477 15.08 19.32C14.4755 19.5791 14.0826 20.1724 14.08 20.83V21C14.08 22.1046 13.1846 23 12.08 23C10.9754 23 10.08 22.1046 10.08 21V20.91C10.0642 20.2327 9.63587 19.6339 9 19.4C8.38291 19.1277 7.66219 19.2583 7.18 19.73L7.12 19.79C6.74486 20.1656 6.23582 20.3766 5.705 20.3766C5.17418 20.3766 4.66514 20.1656 4.29 19.79C3.91445 19.4149 3.70343 18.9058 3.70343 18.375C3.70343 17.8442 3.91445 17.3351 4.29 16.96L4.35 16.9C4.82167 16.4178 4.95235 15.6971 4.68 15.08C4.42093 14.4755 3.82764 14.0826 3.17 14.08H3C1.89543 14.08 1 13.1846 1 12.08C1 10.9754 1.89543 10.08 3 10.08H3.09C3.76733 10.0642 4.36613 9.63587 4.6 9C4.87235 8.38291 4.74167 7.66219 4.27 7.18L4.21 7.12C3.83445 6.74486 3.62343 6.23582 3.62343 5.705C3.62343 5.17418 3.83445 4.66514 4.21 4.29C4.58514 3.91445 5.09418 3.70343 5.625 3.70343C6.15582 3.70343 6.66486 3.91445 7.04 4.29L7.1 4.35C7.58219 4.82167 8.30291 4.95235 8.92 4.68H9C9.60447 4.42093 9.99738 3.82764 10 3.17V3C10 1.89543 10.8954 1 12 1C13.1046 1 14 1.89543 14 3V3.09C14.0026 3.74764 14.3955 4.34093 15 4.6C15.6171 4.87235 16.3378 4.74167 16.82 4.27L16.88 4.21C17.2551 3.83445 17.7642 3.62343 18.295 3.62343C18.8258 3.62343 19.3349 3.83445 19.71 4.21C20.0856 4.58514 20.2966 5.09418 20.2966 5.625C20.2966 6.15582 20.0856 6.66486 19.71 7.04L19.65 7.1C19.1783 7.58219 19.0477 8.30291 19.32 8.92V9C19.5791 9.60447 20.1724 9.99738 20.83 10H21C22.1046 10 23 10.8954 23 12C23 13.1046 22.1046 14 21 14H20.91C20.2524 14.0026 19.6591 14.3955 19.4 15Z" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <div className={classes.subMenu}>
        <span>8 April 2021</span>
      </div>
    </div>
  );
}