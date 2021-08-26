export function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.CHANGE_TITLE:
      return { ...state, title: payload };
    case ACTIONS.CHANGE_DESC:
      return { ...state, description: payload };
    case ACTIONS.CHANGE_AUTHOR:
      return { ...state, author: payload };
    case ACTIONS.CHANGE_TAGS:
      return { ...state, tags: payload };
    default:
      console.log("No actions for this");
  }
}

export const ACTIONS = {
  CHANGE_TITLE: "CHANGE_TITLE",
  CHANGE_DESC: "CHANGE_DESC",
  CHANGE_AUTHOR: "CHANGE_AUTHOR",
  CHANGE_TAGS: "CHANGE_TAGS",
  CHANGE_CONTENT: "CHANGE_CONTENT",
};
