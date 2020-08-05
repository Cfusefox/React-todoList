export default (state = [], action) => {
   switch( action.type ) {
       case "ADD_TODO":
            return [ ...state, action.value ]
        case "DELETE_TODO":
            return [ ...state ].filter((item) => item.id != action.id)
        case "CHANGE_STATUS":
            //todo change map use method
            let stateCopy = [ ...state ]
            stateCopy.forEach(item => {
                if(item.id == action.id) {
                    return item.status = !item.status
                }
            })
        return [ ...stateCopy ]
        case "EMPTY_TODO":
            return []
        default:
            return state
   }
}