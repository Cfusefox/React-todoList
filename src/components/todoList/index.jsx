import React from 'react'
import Todo from '../todo'

class TodoList extends React.Component {

    constructor(props) {
        super(props)
        console.log(this.props)
    }

    render() {
        return <div>
            { this.props.value.map((item, index) => <Todo key={index} value={item} index={index} prop={this.props}/>) }
        </div>
    }
}

export default TodoList