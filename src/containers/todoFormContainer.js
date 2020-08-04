import { connect } from 'react-redux'
import { addTodo } from '../actions'
import TodoForm from '../components/todoForm'

  
const mapDispatchToProps = dispatch => {
  return {
    addTodo: (value) => {
        dispatch(addTodo(value))
    },
    
  }
}
  
  const TodoFormContainer = connect(
    null,
    mapDispatchToProps
  )(TodoForm)
  
  export default TodoFormContainer