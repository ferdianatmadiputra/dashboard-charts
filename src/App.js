import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import HomePage from './pages/HomePage'
import TopMenu from './components/TopMenu'

export default function App () {
  return (
    <div className="App">
      <div id="wrapper">
      <TopMenu />
      <Switch>
        <Route path='/'>
          <HomePage />
        </Route>
      </Switch>
      </div>
    </div>
  )
}