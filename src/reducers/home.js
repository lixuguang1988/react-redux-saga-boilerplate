const homeInitial = {
  ajax: false,
  error: null,
  profile: {},
  posts: []
};

export default function home(state = homeInitial, {payload, type}) {
  switch (type) {
    case 'FETCH_HOME_RESOURCE_START':
      return {
        ...state,
        ajax: true,
        error: null
      }
    case 'FETCH_HOME_RESOURCE_SUCCESS':
      return {
        ...state,
        ...payload
      }
    case 'FETCH_HOME_RESOURCE_FAILED':
      return {
        ...state,
        ajax: false,
        error: payload.error
      }
    default:
      return state
  }
}
