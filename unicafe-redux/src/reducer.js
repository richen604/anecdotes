const initialState = {
  good: 0,
  ok: 0,
  bad: 0,
};

const counterReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "GOOD":
      let goodState = { ...state };
      goodState.good += 1;
      return goodState;
    case "OK":
      let okState = { ...state };
      okState.ok += 1;
      return okState;
    case "BAD":
      let badState = { ...state };
      badState.bad += 1;
      return badState;
    case "ZERO":
      let zeroState = { ...initialState };
      return zeroState;
    default:
      return state;
  }
};

export default counterReducer;
