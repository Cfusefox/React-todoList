import React from 'react'
import './index.css'


class Todo extends React.Component {
    constructor(props) {
        super(props)
    }

    changeStatus = () => {
        this.props.prop.changeStatus(this.props.value.id)
    }

    deleteTodo = () => {
        this.props.prop.deleteTodo(this.props.value.id)
    }

    render() {
       return <div>
            <li onClick={this.changeStatus} className={this.props.value.status?'not-done':'done'}>{ this.props.value.content }</li>
            <button onClick={this.deleteTodo}>X</button>
       </div>
    }

}

export default Todo