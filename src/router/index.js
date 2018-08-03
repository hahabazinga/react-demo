import { Route, Switch, Redirect } from 'react-router-dom'
import React from 'react'
import Home from '../components/Home'
import About from '../components/About'


const Main = () => (
    <main>
        <Switch>
            <Route path='/react-demo/' component={Home} />
            <Route path='/about/' component={About} />
            <Redirect from='/*' to='/react-demo/' />
        </Switch>
    </main>
)
export default Main