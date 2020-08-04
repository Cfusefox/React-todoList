import { connect } from 'react-redux'
import UndoneList from '../components/todoList/undoneList'
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
  
const UndoneListContainer = connect(
    mapStateToProps, mapDispatchToProps
)(UndoneList)

export default UndoneListContainer