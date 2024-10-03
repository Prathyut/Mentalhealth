export default function RouteReducer(state = "Home", action) {
    switch (action.type) {
      case "page":
        return action.data;
      default:
        return state;
    }
  }
  