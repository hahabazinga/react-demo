import React from 'react'
const About = props => {
    const num = props.match.params.number
        return (
            <div>about{num}</div>
        )
}
export default About