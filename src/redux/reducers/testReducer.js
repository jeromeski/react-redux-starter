const initialState = {
  message: ''
};

const testReducer = (state = initialState, action) => ({
  ...state,
  message: 'hello world'
});

export default testReducer;
