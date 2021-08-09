const initialState = {
  text: "",
  mywishes: [{ _id: 1, wish: "loading" }],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "UPDATE_INPUT":
      return { ...state, text: payload };
    case "FETCH_WISH":
      return { ...state, mywishes: payload };
    case "ADD_WISH":
      return { text: "", mywishes: [...state.mywishes, payload] };
    case "DELETE_WISH":
      const newWishes = state.mywishes.filter((item) => {
        return item._id !== payload._id;
      });
      return { ...state, mywishes: newWishes };
    default:
      return state;
  }
};
