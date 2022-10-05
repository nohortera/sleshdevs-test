import { UPDATE_USERS } from '../../actions/users'

export const userReducer = (state = [], { type, payload }) => {
  switch (type) {
    case UPDATE_USERS:

      return payload

    default:

      return state
  }
}
