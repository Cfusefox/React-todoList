import React from 'react'
import './index.css'
import { deleteTodo, modifyTodo } from '../../store/api'
import '../../css/icon.css'



class Todo extends React.Component {
    constructor(props) {
        super(props)
    }
//add then
    changeStatus = () => {
        modifyTodo(this.props.value.id, {
            "id": this.props.value.id,
            "content": this.props.value.content,
            "status": this.props.value.status
        }).then(() => {
            this.props.prop.changeStatus(this.props.value.id)
        })
    }

    deleteTodo = () => {
        deleteTodo(this.props.value.id).then(() => {
            this.props.prop.deleteTodo(this.props.value.id)
        })
    }

    render() {
       return <div className="todo">
            <div onClick={this.changeStatus} className={this.props.value.status?'not-done':'done'}><span>{ this.props.value.content }</span></div>
            <div onClick={this.deleteTodo} className="icon-bin delete-button"></div>
       </div>
    }

}

export default Todo