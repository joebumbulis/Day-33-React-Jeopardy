

const initialState = {
  username: " ",
  categories: []
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



  return state;
}


/////////////
Skip to content
This repository
Search
Pull requests
Issues
Gist
 @joebumbulis
 Sign out
 Watch 0
  Star 0
  Fork 0 AndresTIY/Wknd-Project-7
 Code  Issues 0  Pull requests 0  Projects 0  Wiki  Pulse  Graphs
Branch: master Find file Copy pathWknd-Project-7/app/scripts/reducers/app_reducer.js
b3c70d0  4 hours ago
@AndresTIY AndresTIY each modal get's correct data but only final modal pops up when clicked
1 contributor
RawBlameHistory
Executable File  53 lines (41 sloc)  1.02 KB
const initialState = {
  startClick: false,
  name: '',
  points: '',
  data: [],
  modal: false

}

export default function AppReducer (state, action) {
  if (state === undefined) {
    return initialState;
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
      //CURRENT_QUESTION isn't doing anything, should assign
      // question, answer, value during MODAL case instead

    default:
      console.debug("Unhandled State");
      return state

  }



  return state;
}
Contact GitHub API Training Shop Blog About
© 2017 GitHub, Inc. Terms Privacy Security Status Help
