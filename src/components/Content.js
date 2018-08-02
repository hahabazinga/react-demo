import React, { Component } from 'react'

import Child from './Child'
import { Link } from 'react-router-dom'
class Content extends Component{
    constructor(props) {
        super(props)
        this.state = {
            pageId: this.props.match.params.pageId,
            menu: [1, 2]
        }

    }
    componentDidMount() {
        console.log(this.props.match.params.pageId)
    }
    render() {
        return (
            <div>
                <span>{this.props.match.params.pageId}</span>
            </div>
        )
    }

}
export default Content