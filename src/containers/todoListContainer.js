import { connect } from 'react-redux'

const mapStateToProps = state => {
    return {
      value: state.value
    }
  }
  
  const todoListContainer = connect(
    mapStateToProps
  )(todoList)
  
  export default todoListContainer