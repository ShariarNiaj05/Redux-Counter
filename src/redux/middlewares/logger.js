const logger = (store) => (next) => (action) => {
    const currentState = store.getState()
    next(action)
    console.log(currentState);
}
export default logger