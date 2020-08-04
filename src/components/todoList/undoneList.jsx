import React from 'react'
import Todo from '../todo'

class UndoneList extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return <div>
            { this.props.value.filter(item => item.status == true).map((item, index) => <Todo key={index} value={item} prop={this.props}/>) }
        </div>
    }
}

export default UndoneList