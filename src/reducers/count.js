//hook
const countReducer = (state,action)=>{
    switch(action.type){
      case 'POPULATE_COUNT':
        return action.count;
      case 'RESET_COUNT':
          return action.default;
      default:
        return state;
    }
}

export {countReducer};