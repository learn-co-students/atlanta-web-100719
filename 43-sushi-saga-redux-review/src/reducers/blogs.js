export default (state={ posts: [] }, action) => {
  switch (action.type) {

    case 'GET_POSTS':
      return { posts: [1,2,3,4,5] }

    case 'DELETE_POST':
      return { posts: [1,4,5] }

    default:
      return state
  }
}
