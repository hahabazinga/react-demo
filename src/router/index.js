import { Router, Route, browserHistrory } from 'react-router'
import LeftNav from '../components/LeftNav'
import Child from '../components/Child'
import Home from '../components/Home'
import About from '../components/About'

const router = new Router({
    mode: 'hash',
    routes: [
        {
            path: '/',
            components: LeftNav
        },
        {
            path: '/child',
            components: Child
        }
    ]
})
export default router