import React from 'react'


class TodoForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
    }

    onChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    submit = () => {
        if(this.state.text!='')
        this.props.addTodo(this.state.text)
        document.getElementById("input").value = ''
        this.setState({
            text: ''
        })
    }

    render() {
        return <div>
                <input type="text" value={this.state.value} onChange={this.onChange} placeholder="add todo" id="input"/>
                <button onClick={this.submit}>add</button>
        </div>
    }

}

export default TodoForm