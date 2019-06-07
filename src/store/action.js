export const addUser = ({
  avatar_url = "",
  login = "",
  location = ""
} = {}) => ({
  type: "ADD",
  addData: {
    avatar_url,
    login,
    location
  }
});

// REMOVE_EXPENSE
export const removeUser = (id = "") => ({
  type: "DELETE",
  id
});
