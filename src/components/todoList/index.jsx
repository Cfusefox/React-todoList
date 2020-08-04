import React from 'react'
import Todo from '../todo'
import { getTodoList } from '../../store/api'
import './index.css'

class TodoList extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        if(this.props.value.length == 0) {
            getTodoList().then((res) => {
                res.data.map(item => {
                    this.props.addTodo(item)
                })
            })
        }
    }

    render() {
        return <div className="todo-list">
            { this.props.value.map((item, index) => <Todo key={index} value={item} prop={this.props}/>) }
        </div>
    }
}

export default TodoList