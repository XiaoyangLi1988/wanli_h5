import React, { useEffect } from 'react'
import { renderRoutes } from 'react-router-config'
import routes from './routes'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { Provider } from "react-redux"
import store from "./store"
import "./utils/i18n";
import './styles/main.less';
import './styles/index.less';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <Provider store={store}>
      <Router>
        <Header/>
        <Switch>
          {renderRoutes(routes)}
        </Switch>
        <Footer />
      </Router>
    </Provider>
  )
}

export default App;
