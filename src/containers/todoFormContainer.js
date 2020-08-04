import { connect } from 'react-redux'
import { addTodo } from '../actions'

  
const mapDispatchToProps = dispatch => {
  return {
    addTodo: (value) => {
        dispatch(addTodo(value))
    },
    
  }
}
  
  const todoFormContainer = connect(
    null,
    mapDispatchToProps
  )(todoForm)
  
  export default todoFormContainer