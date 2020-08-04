export default (state = [], action) => {
   switch( action.type ) {
       case "ADD_TODO":
           if(state.indexOf(action.value) >= 0) {
               return [ ...state ]
           } else {
                return [ ...state, action.value ]
           }
        case "DELETE_TODO":
            return [ ...state ].filter(item => item != action.value)
        default:
            return state
   }
}