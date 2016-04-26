import React from 'react'
import Tools from '../Tools/'
export default class TechStack extends React.Component {
    render() {
        return (
            <div class="container">
                <div class="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                        <h3>Libaries and Framework Used</h3>
                        <Tools/>
                    </div>
                </div>
            </div>
        )
    }
}