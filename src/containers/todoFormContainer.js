import { connect } from 'react-redux'
import { addTodo, emptyTodo } from '../actions'
import TodoForm from '../components/todoForm'

  
const mapStateToProps = state => {
    return {
      value: state
    }
  }

const mapDispatchToProps = dispatch => {
  return {
    addTodo: (value) => {
        dispatch(addTodo(value))
    },
    emptyTodo: () => {
        dispatch(emptyTodo())
    }
  }
}
  
  const TodoFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(TodoForm)
  
  export default TodoFormContainer