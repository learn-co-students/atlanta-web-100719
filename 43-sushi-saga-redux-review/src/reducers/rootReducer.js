import login from './login'
import sushi from './sushi'
import blogs from './blogs'

import { combineReducers } from 'redux'

export default combineReducers({
  login: login,
  sushi: sushi,
  blogs: blogs
})
