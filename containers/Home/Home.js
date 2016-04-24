import React from 'react'
import {styles} from './styles.scss'
export default class Home extends React.Component {
    render() {
        return (
            <section className={styles}>
                <h2>Home</h2>
            </section>
        )
    }
}
Home.contextTypes = {
    router: React.PropTypes.object
}