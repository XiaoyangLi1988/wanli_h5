import React from 'react'
import { renderRoutes } from 'react-router-config'
import routes from './routes'
import { HashRouter as Router } from 'react-router-dom'
import { Provider } from "react-redux"
import store from "./store"

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="main">
          {renderRoutes(routes)}
        </div>
      </Router>
    </Provider>
  )
}

export default App;
