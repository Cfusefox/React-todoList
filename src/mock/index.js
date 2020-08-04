import Mock from 'mockjs'
import todoList from './todoList'

Mock.mock(/\/todoList/, 'get', todoList)

export default Mock