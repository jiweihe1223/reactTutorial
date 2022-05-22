const listReducer = (state = [], { type, payload }) => {
  switch (type) {
    case "INIT":
      return [...payload];
    case "ADD":
      return [...state, { ...payload }];
    case "DEL":
      return state.filter((item, index) => index !== payload);
    case "MOD":
      return state.map((todo, index) => {
        return index === payload
          ? {
              content: todo.content,
              isCompleted: !todo.isCompleted,
            }
          : todo;
      });
    default:
      return state;
  }
};

export default listReducer;
