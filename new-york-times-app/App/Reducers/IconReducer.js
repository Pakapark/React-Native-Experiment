const INIT_STATE = {
  selected: ""
}

export default (state=INIT_STATE, action) => {
  switch (action.type) {
    case "icon-change":
      return {...state, selected: action.payload}
    default:
      return state
  }
}
