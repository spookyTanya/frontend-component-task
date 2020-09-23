interface ActionData {
  type: string;
  payload: string;
}

export const selectUser = (user): ActionData => {
  return {
    type: 'USER_SELECTED',
    payload: user
  };
};
