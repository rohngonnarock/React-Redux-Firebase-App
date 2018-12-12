const initState = {}

const uploadReducer = (state = initState, action) => {
  switch (action.type) {
    case 'UPLOAD_SUCCESS':
      console.log('create project success');
      return state;
    case 'UPLOAD_ERROR':
      console.log('create project error');
      return state;
    default:
      return state;
  }
};

export default uploadReducer;