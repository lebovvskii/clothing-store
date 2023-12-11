export const loggerMiddleWare = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }
  console.log("type:", action.type);
  console.log("payload:", action.payload);
  console.log("Current state:", store.getState());

  next(action);
  console.log("next state:", store.getState());
};
