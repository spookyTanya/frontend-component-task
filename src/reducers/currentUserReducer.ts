interface State {
  currentUser: string;
}

const initialState: State = {
  currentUser: 'user'
};

export default function (state = initialState, action): State {
  if (action.type === 'USER_SELECTED') {
    return {
      currentUser: action.payload
    };
  }

  return state;
}
