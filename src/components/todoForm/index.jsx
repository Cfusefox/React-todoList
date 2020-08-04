import React from 'react'


class TodoForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
    }

    submit = () => {
        this.props.addTodo(this.state.text)
    }

    render() {
        return <div>
            <form onSubmit={this.submit}>
                <input type="text" value={this.state.value} placeholder="add todo"/>
                <button type="submit">add</button>
            </form>
        </div>
    }

}

export default TodoForm