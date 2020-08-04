export default (state = [], action) => {
   switch( action.type ) {
       case "ADD_TODO":
            return [ ...state, action.value ]
        case "DELETE_TODO":
            return [ ...state ].filter((item, index) => index != action.id)
        default:
            return state
   }
}