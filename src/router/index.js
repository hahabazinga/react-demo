import { Route, Switch} from 'react-router-dom'
import React from 'react'
import Home from '../components/Home'
import About from '../components/About'
import LeftNav from '../components/LeftNav'

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={LeftNav} />
            <Route path='/about/:number' component={About} />
        </Switch>
    </main>
)

export default Main