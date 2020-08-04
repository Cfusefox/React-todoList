import React from 'react'
import { addTodo, getTodoList } from '../../store/api'
import './index.css'

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
        if(this.state.text!=''){
            addTodo({
                "id": Date.parse(new Date()),
                "content": this.state.text,
                "status": true
            }).then(() => {
                this.props.emptyTodo()
                getTodoList().then((res) => {
                    res.data.map(item => {
                        this.props.addTodo(item)
                    })
                })
            })
        }
        document.getElementById("input").value = ''
        this.setState({
            text: ''
        })
    }

    render() {
        return <div className="form">
                <input type="text" value={this.state.value} onChange={this.onChange} placeholder="add todo" id="input"/>
                <div onClick={this.submit} className="add-button">+</div>
        </div>
    }

}

export default TodoForm