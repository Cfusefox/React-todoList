import React from 'react'


class Todo extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
       return <li>
           { this.props.value }
           </li>
    }

}

export default Todo