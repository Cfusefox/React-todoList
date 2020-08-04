export const addTodo = (value) => ({
    type: "ADD_TODO",
    value: value
})
export const deleteTodo = (id) => ({
    type: "DELETE_TODO",
    id: id
})
export const changeStatus = (id) => ({
    type: "CHANGE_STATUS",
    id: id
})
export const emptyTodo = () => ({
    type: "EMPTY_TODO"
})