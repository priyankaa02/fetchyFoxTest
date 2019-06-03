import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import C from '../constants/constant'
import HomeContainer from '../containers/HomeContainer'
import ItemsContainer from '../containers/ItemsContainer'
import ItemDescriptionContainer from '../containers/ItemDescriptionContainer'
import CartContainer from '../containers/CartContainer'

class App extends Component {

  onBackButtonEvent(e) {
    e.preventDefault()
    // history.goBack(1)

    // failed to resume component state, force reload
    window.location.reload()
  }

  render() {

    return (
      <main>
        <Switch>
          <Route exact path={C.ROUTE_PATH_HOME} component={HomeContainer}/>
          <Route exact path={C.ROUTE_PATH_ITEMS} component={ItemsContainer}/>
          <Route exact path={C.ROUTE_PATH_ITEM_DESCRIPTION} component={ItemDescriptionContainer}/>
          <Route exact path={C.ROUTE_PATH_CART} component={CartContainer}/>
          <Route path="*" render={(props) => {
            return <Redirect to={{ pathname: C.ROUTE_PATH_HOME, state: { from: props.location } }}/>
          }}/>
        </Switch>
      </main>
    )
  }
}

export default App
