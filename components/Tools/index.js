import React, { Component } from 'react';

/* component styles */
import { styles } from './styles.scss';

/* images */
const reactjs = require('./files/reactjs.png');
const redux = require('./files/redux.png');
const webpack = require('./files/webpack.png');
const bootstrap = require('./files/bootstrap.png');

export default class Tools extends Component {
    render() {
        return (
            <section className={`${styles}`}>
                <div className="container">

                    <hr></hr>
                    <div className="row">
                        <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3 tool">
                            <img src={reactjs}/>
                            <h4>
                                React
                            </h4>
                        </div>

                        <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3 tool">
                            <img src={redux}/>
                            <h4>
                                Redux
                            </h4>
                        </div>

                        <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3 tool">
                            <img src={webpack}/>
                            <h4>
                                Webpack
                            </h4>
                        </div>

                        <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3 tool">
                            <img src={bootstrap}/>
                            <h4>
                                Bootstrap
                            </h4>
                        </div>
                    </div>

                </div>
            </section>
        );
    }
}
