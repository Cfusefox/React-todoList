import { connect } from 'react-redux'
import { addTodo } from '../actions'
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
    }
  }
}
  
  const TodoFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(TodoForm)
  
  export default TodoFormContainer