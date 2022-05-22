export const searchToDo = (dispatch) => async (content) => {
  dispatch({
    type: "SEARCH",
    payload: content,
  });
};
