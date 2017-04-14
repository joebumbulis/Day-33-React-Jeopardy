

const initialState = {
  username: " ",
  categories: []
  view: loginView;
}

export default function AppReducer (state, action) {
  if (state === undefined) {
    return {};
  }



  switch(action.type){
    case "TESTING":
    console.log("Testing reducer")
    console.log(state);
    return state
  }



  return state;
}
