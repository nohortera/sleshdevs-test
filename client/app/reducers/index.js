import {
  combineReducers
} from 'redux'

import paginatedPage from './paginated-page'
import { userReducer } from './users'

export default combineReducers({ paginatedPage, users: userReducer })
