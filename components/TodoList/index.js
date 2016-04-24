import React, {PropTypes} from 'react'


class TodoList extends React.Component {
    constructor(props)
    {
        super(props);
    }
    render() {
        let todos = this.props.todos;
        return (
            <ul>
                {todos.map(todo =>
                    <p
                        key={todo.id}
                        onClick={() => onTodoClick(todo.id)}
                    >
                        {todo.text}

                    </p>
                )}
            </ul>
        )
    }
}
TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired
}

export default TodoList