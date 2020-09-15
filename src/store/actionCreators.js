const axios = require('axios')
const { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION } = require('./actionTypes')

const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})

const getAddItemAction = () => ({
  type: ADD_TODO_ITEM
})

const getDeleteItemAction = (index) => ({
  type: DELETE_TODO_ITEM,
  index
})

const initListAction = (data) => ({
  type: INIT_LIST_ACTION,
  data
})

const getTodoList = () => {
  return (dispatch) => {
    axios.get('/list.json').then((res) => {
      const data = res.data
      const action = initListAction(data)
      dispatch(action)
    })
  }
}

module.exports = {
  getInputChangeAction,
  getAddItemAction,
  getDeleteItemAction,
  initListAction,
  getTodoList
}