export const addTodo = (value) => ({
    type: "ADD_TODO",
    value: value
})
export const deleteTodo = (id) => ({
    type: "DELETE_TODO",
    id: id
})