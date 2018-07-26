import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Child from './Child'
class LeftNav extends Component{
    constructor(props) {
        super(props)
        this.state = {
            value: this.props.name
        }
        this.btnListener = this.btnListener.bind(this)
    }
    static childContextTypes = {
        name: PropTypes.string,
        print: PropTypes.func
    }
    getChildContext () {
        return {
            name: this.state.value,
            print: (msg) => {
                console.log(msg)
            }
        }
    }
    btnListener(e) {
        console.log('before', this)
        this.setState({
            value: this.state.value + 'click1'
        }, () => console.log(this.state.value))
        console.log('ing', this.state)
        this.setState({
            value: this.state.value + 'click2'
        }, () => console.log(this.state.value))
        setTimeout(() => {
            this.setState({
                value: this.state.value + 'set'
            }, () => console.log(this.state.value))
            this.setState({
                value: this.state.value + 'set2'
            }, () => console.log(this.state.value))

        }, 1000)
    }

    render() {
        return (
            <div>
                <button className='leftnav-btn' onClick={(e) => this.btnListener(e)}>{this.state.value}</button>
                <Child />
            </div>
        )
    }

}
export default LeftNav