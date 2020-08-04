import React from 'react'
import './index.css'
import { deleteTodo, modifyTodo } from '../../store/api'


class Todo extends React.Component {
    constructor(props) {
        super(props)
    }

    changeStatus = () => {
        this.props.prop.changeStatus(this.props.value.id)
        modifyTodo(this.props.value.id, {
            "id": this.props.value.id,
            "content": this.props.value.content,
            "status": this.props.value.status
        }).then((res) => {
            console.log(res.data)
        })
    }

    deleteTodo = () => {
        this.props.prop.deleteTodo(this.props.value.id)
        deleteTodo(this.props.value.id)
    }

    render() {
       return <div>
            <li onClick={this.changeStatus} className={this.props.value.status?'not-done':'done'}>{ this.props.value.content }</li>
            <button onClick={this.deleteTodo}>X</button>
       </div>
    }

}

export default Todo