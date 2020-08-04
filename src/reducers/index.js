export default (state = [], action) => {
   switch( action.type ) {
       case "ADD_TODO":
            return [ ...state, action.value ]
        case "DELETE_TODO":
            return [ ...state ].filter((item) => item.id != action.id)
            case "CHANGE_STATUS":
                let stateCopy = [ ...state ]
                stateCopy.map(item => {
                    if(item.id == action.id) {
                        return item.status = !item.status
                    }
                })
            return [ ...stateCopy ]
        default:
            return state
   }
}