import React from 'react'
import {styles} from './styles.scss'
import {connect} from 'react-redux'
import AddTodo from '../../components/AddTodo/index'
import TodoList from '../../components/TodoList/index'
export default class List extends React.Component {
    render() {
        return (
            <section className={styles}>
                <h2>List</h2>
                <TodoList todos={this.props.todos}></TodoList>
                <AddTodo></AddTodo>
            </section>
        )
    }
}
List.contextTypes = {
    router: function () {
        return React.PropTypes.func.isRequired;
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.listItems.items
    }
}

List = connect(mapStateToProps)(List)
export default List