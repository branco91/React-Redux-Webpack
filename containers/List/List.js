import React from 'react'

export default class List extends React.Component
{
    render(){
        return (
            <h2>List</h2>
        )
    }
}
List.contextTypes = {
    router: function () {
        return React.PropTypes.func.isRequired;
    }
}