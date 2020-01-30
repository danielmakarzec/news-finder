import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'

import Search from './Search'
import Favourite from './Favourite'
import Nav from './Nav'

class App extends React.Component {
  constructor(){
    super()
    this.state = { color: "green" }
  }

  render(){
    return (
      <BrowserRouter>
        <div id='app'>
          <Nav />
          <Switch>
            <Route path='/' component={Search} exact/>
            <Route path='/favourite' component={Favourite} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
