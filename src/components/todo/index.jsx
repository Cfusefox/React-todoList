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

    render() {
       return <div onClick={this.changeStatus}>
            <li className={this.state.status?'done':'not-done'}>{ this.props.value }</li>
       </div>
    }

}

export default Todo