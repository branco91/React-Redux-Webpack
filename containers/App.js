import React from 'react'
import ReactDOM, {render} from 'react-dom'
import Navbar from '../components/Navbar'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import listItems from '../reducers/list-items'
import { Router, Route, hashHistory,  Link, IndexRoute } from 'react-router'
import Home from '../containers/Home/Home.js'
import List from '../containers/List/List.js'

const store = createStore(combineReducers({
    listItems,
    routing: routerReducer
}))
export default class App extends React.Component {
    render() {
        let {activeState,router}=this.props
        return (
            <Provider store={store}>
                <section>
                    <Navbar
                        activeState={activeState}
                    />
                    {this.props.children}
                </section>
            </Provider>
        )
    }
}

let rootElement = document.getElementById("root");
ReactDOM.render(
    <App/>,
    rootElement
);
render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="home" component={Home}/>
            <Route path="list" component={List}/>
        </Route>
    </Router>,
    rootElement
)