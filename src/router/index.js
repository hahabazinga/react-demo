import { Route, Switch} from 'react-router-dom'
import React from 'react'
import Home from '../components/Home'
import About from '../components/About'


const Main = () => (
    <main>

        <Route path='/' component={Home} />
        <Route path='/about/:number' component={About} />

    </main>
)

export default Main