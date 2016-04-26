import React from 'react'
import {styles} from './styles.scss'
import HomeImage from '../../components/HomeImage'
import TechStack from '../../components/TechStack/'

export default class Home extends React.Component {
    render() {
        return (
            <section className={styles}>
                <HomeImage/>
                <TechStack/>
            </section>
        )
    }
}
Home.contextTypes = {
    router: React.PropTypes.object
}