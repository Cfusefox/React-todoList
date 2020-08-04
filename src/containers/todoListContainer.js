import { connect } from 'react-redux'
import TodoList from '../components/todoList'
import { deleteTodo } from '../actions/index'

const mapStateToProps = state => {
    return {
      value: state
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
      deleteTodo: (value) => {
          dispatch(deleteTodo(value))
      }
    }
  }
  
const TodoListContainer = connect(
    mapStateToProps, mapDispatchToProps
)(TodoList)

export default TodoListContainer