export const pcMiddleware = (state, action) => {
    pc.app.fire(action.type, action.payload);
    return state;
};
