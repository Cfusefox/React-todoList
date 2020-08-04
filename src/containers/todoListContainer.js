import { connect } from 'react-redux'
import TodoList from '../components/todoList'
import { deleteTodo, changeStatus } from '../actions/index'

const mapStateToProps = state => {
    return {
      value: state
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
      deleteTodo: (id) => {
          dispatch(deleteTodo(id))
      },
      changeStatus: (id) => {
          dispatch(changeStatus(id))
      }
    }
  }
  
const TodoListContainer = connect(
    mapStateToProps, mapDispatchToProps
)(TodoList)

export default TodoListContainer