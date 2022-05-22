import { todoApi } from "../api/api";

export const initTodo = (dispatch) => async () => {
  const result = await todoApi.getAllTodos();

  dispatch({
    type: "INIT",
    payload: result,
  });
};

export const addTodo = (dispatch) => async (content) => {
  await todoApi.addTodo({
    content,
    isCompleted: false,
  });

  dispatch({
    type: "ADD",
    payload: {
      content,
      isCompleted: false,
    },
  });
};

export const modTodo = (dispatch) => async (index) => {
  await todoApi.modTodo(index);

  dispatch({
    type: "MOD",
    payload: index,
  });
};

export const delTodo = (dispatch) => async (index) => {
  await todoApi.delTodo(index);

  dispatch({
    type: "DEL",
    payload: index,
  });
};
