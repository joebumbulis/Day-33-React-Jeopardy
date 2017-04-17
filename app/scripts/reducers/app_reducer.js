

const initialState = {
  username: " ",
  categories: [],
  points: " ",


  // view: loginView;
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

  switch (action.type) {
    case "START":
      return Object.assign({}, state, {
          startClick: !state.startClick,
          name: action.name
        });

    case "LOAD_DATA":
      var newData = state.data.slice();
      newData.push(action.data);
      return Object.assign({}, state, {
        data: newData
      });

    case "MODAL_TOGGLE":
      return Object.assign({}, state, {
        modal: !state.modal
      })

    case "CURRENT_QUESTION":
      return Object.assign({}, state, {
        question: action.question,
        answer: action.answer,
        value: action.value
      })

  return state;
  }
}
