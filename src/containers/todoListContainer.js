import { connect } from 'react-redux'
import TodoList from '../components/todoList'

const mapStateToProps = state => {
    return {
      value: state
    }
  }
  
const TodoListContainer = connect(
    mapStateToProps
)(TodoList)

export default TodoListContainer