import React from 'react'
import Todo from '../todo'
import './index.scss'

class UndoneList extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return <div className="todo-list">
            { this.props.value.filter(item => item.status == true).map((item, index) => <Todo key={index} value={item} prop={this.props}/>) }
        </div>
    }
}

export default UndoneList