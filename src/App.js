import React, { useState, useEffect } from 'react'
import styles from './App.module.less'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { AppContext } from './AppContext'

import Header from './components/Header'
import Footer from './components/Footer'

import Index from './pages/Index'
import Join from './pages/Join'

function timeout(ms, promise) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      reject(new Error('timeout'))
    }, ms)
    promise.then(resolve, reject)
  })
}

function useNetEnv() {
  const [netEnv, setNetEnv] = useState('outter')
  const [testOver, setTestOVer] = useState(false)
  useEffect(() => {
    const fetchNetEnv = async () => {
      try {
        await timeout(200, fetch('https://fether.m.alibaba-inc.com/mux/testinc'))
        setNetEnv('inner')
        setTestOVer(true)
      } catch {
        setNetEnv('outter')
        setTestOVer(true)
      }
    }
    fetchNetEnv()
  }, [])
  return {netEnv, testOver}
}

function App() {
  const {testOver, netEnv} = useNetEnv()

  const appContextValue = {
    netEnv
  }

  return (
    <div className={styles.App}>
      {testOver && (
        <AppContext.Provider value={appContextValue}>
          <Router>
            <Header />
            <Switch>
              <Route path="/" exact>
                <Index />
              </Route>
              <Route path="/join">
                <Join />
              </Route>
            </Switch>

            <Footer />
          </Router>
        </AppContext.Provider>
      )}
    </div>
  )
}

export default App
