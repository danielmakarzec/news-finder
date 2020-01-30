import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'

import Search from './Search'
import Favourite from './Favourite'
import Nav from './Nav'

class App extends React.Component {

  render(){
    return (
      <BrowserRouter>
        <div>
          <Nav />
          <Switch>
            <Route path='/' component={Search} exact/>
            <Route path='/favourite' conponent={Favourite} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App