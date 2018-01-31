const INIT_STATE = {
  searchTerm: ""
}

export default (state=INIT_STATE, action) => {
  switch (action.type) {
    case "search-change":
      return {...state, searchTerm: action.payload }
    default:
      return state
  }
}
