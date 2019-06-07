let defaultState = [];
const json = localStorage.getItem("UserProfile");
if (JSON.parse(json).length) {
  defaultState = [...JSON.parse(json)];
}
export default (state = defaultState, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.addData];
    case "DELETE":
      return state.filter(({ login }) => login !== action.id);
    default:
      return state;
  }
};
