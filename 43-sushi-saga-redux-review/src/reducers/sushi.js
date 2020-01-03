const initialState = {
  sushis: [],
  eaten: [],
  offset: 0,
  index: 0,
  wallet: 100
}

export default (state=initialState, action) => {

  switch (action.type) {

    case 'GET_SUSHIS':
      return { ...state, sushis: action.sushis, offset: 4 }

    case 'MORE_SUSHI':
      if(state.offset >= state.sushis.length){
        return {...state, index: 0, offset: 4}
      }
      return { ...state, index: state.offset, offset: state.offset + 4 }

    case 'EAT_SUSHI':
      const sushi = action.sushi
      if(!state.eaten.filter(eatenSushi => eatenSushi.id === sushi.id).length > 0
          && state.wallet > sushi.price){
        return {
          ...state,
          eaten: [...state.eaten, sushi],
          wallet: state.wallet - sushi.price
        }
      }
      return state

    default:
      return state
  }
}
