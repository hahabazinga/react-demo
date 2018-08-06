import React, { Component } from 'react'
import '../style/context.css'
import 'github-markdown-css/github-markdown.css'
import 'highlight.js/styles/darcula.css';
import hljs from 'highlight.js'
import marked from 'marked'
marked.setOptions({
    highlight: code => hljs.highlightAuto(code).value,
});
class Content extends Component{
    constructor(props) {
        super(props)
        this.state = {
            context: '正在加载中...'
        }

    }
    componentDidMount() {
        this.fetchMd(this.props)
    }
    componentWillReceiveProps(nextProps) {
        this.fetchMd(nextProps)
    }
    fetchMd(nextProps) {
        import(`../static/blog${nextProps.match.params.pageId}`).then((data) => this.setState({
            context: marked(data.default)
        })).catch((e) => this.setState({
            context: e.toString()
        }))
    }
    render() {
        return (
                <div className="markdown-body" dangerouslySetInnerHTML={{__html: this.state.context}}></div>
        )
    }

}
export default Content