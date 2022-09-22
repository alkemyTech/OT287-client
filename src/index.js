import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@mui/material/styles'
import { BrowserRouter as Router } from 'react-router-dom';
import store from './app/store'
import * as serviceWorker from './serviceWorker'
import theme from './styles/theme'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
