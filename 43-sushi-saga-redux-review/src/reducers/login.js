export default (state={ userInfo: {}, users: [] }, action) => {
  switch (action.type) {

    case 'LOGIN':
      return {
        ...state,
        userInfo: { name: 'JAMES' },
        users: ['askjfnsajknf','jkasnfjkoanfj']
      }
      
    case 'LOGOUT':
      return {
        userInfo: {},
        users: []
      }

    default:
      return state
  }
}
