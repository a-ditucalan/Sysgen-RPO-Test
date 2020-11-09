import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { hot } from 'react-hot-loader'
import { ToastContainer, Flip } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Home from './containers/home'
import About from './containers/about'
import NoRouteMatch from './containers/404'
class App extends Component {
  render() {
    return (
      <>
        <HashRouter basename="/">
          <div className="App">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route component={NoRouteMatch} />
            </Switch>
          </div>
        </HashRouter>
        <ToastContainer
          position="top-center"
          transition={Flip}
          autoClose={3000}
          hideProgressBar
          closeButton={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable={false}
          pauseOnHover
        />
      </>
    )
  }
}

export default hot(module)(App)
