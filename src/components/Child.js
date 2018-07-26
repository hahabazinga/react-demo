import React, { Component } from 'react'
import PropTypes from 'prop-types'
class Child extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: '',
            print: () => {}
        }
        this.inputChangeHandler = this.inputChangeHandler.bind(this)
        this.myref = React.createRef()
    }
    static contextTypes = {
        name: PropTypes.string,
        print: PropTypes.func
    }
    componentDidMount() {
        this.myref.current.focus()
        const {
            name,
            print
        } = this.context
        print(name)
        this.setState({
            name: name,
            print: print
        })
        this.state.print.bind(this)
    }
    inputChangeHandler(e) {
        const newname = e.target.value
        this.setState({
            name: newname
        })
        this.state.print(newname)
    }
    render() {
        return (
            <input ref={this.myref} value={this.state.name} onChange={this.inputChangeHandler} />
        )
    }
}
export default Child
