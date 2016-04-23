import React from 'react'
export default class Home extends React.Component {
    render() {
        return (
            <section>
                <h2>Home</h2>
            </section>
        )
    }
}
Home.contextTypes = {
    router: React.PropTypes.object
}