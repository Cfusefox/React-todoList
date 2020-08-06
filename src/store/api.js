import axios from 'axios'

const URL = 'http://localhost:8088/todo'

export function getTodoList() {
  return axios({
    method: 'get',
    url: URL
  })
}

export function deleteTodo(id) {
  return axios({
    method: 'delete',
    url: `${URL}/${id}`
  })
}

export function addTodo(todo) {
  return axios({
    method: 'post',
    url: URL,
    data: todo
  })
}

export function modifyTodo(id, todo) {
  return axios({
    method: 'put',
    url: `${URL}/${id}`,
    data: todo
  })
}

export function getTodoListByMock() {
  return axios({
    method: 'get',
    url: '120.0.0.1:3000/' + 'todoList'
  })
}