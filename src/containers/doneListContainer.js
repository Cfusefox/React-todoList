import { connect } from 'react-redux'
import DoneList from '../components/todoList/doneList'
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
  
const DoneListContainer = connect(
    mapStateToProps, mapDispatchToProps
)(DoneList)

export default DoneListContainer