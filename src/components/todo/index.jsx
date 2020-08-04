import React from 'react'
import './index.css'


class Todo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            status: false
        }
    }

    changeStatus = () => {
        this.setState({
            status: !this.state.status
        })
    }

    deleteTodo = () => {
        this.props.prop.deleteTodo(this.props.value)
    }

    render() {
       return <div>
            <li onClick={this.changeStatus} className={this.state.status?'done':'not-done'}>{ this.props.value }</li>
            <button onClick={this.deleteTodo}>X</button>
       </div>
    }

}

export default Todo