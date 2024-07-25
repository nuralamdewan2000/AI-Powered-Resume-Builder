const initialState = {
    resumes: [],
    resume: null,
    loading: true,
    aiSuggestions: '',
  };
  
  export default function resumeReducer(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case 'GET_RESUMES':
        return {
          ...state,
          resumes: payload,
          loading: false,
        };
      case 'GET_RESUME':
        return {
          ...state,
          resume: payload,
          loading: false,
        };
      case 'ADD_RESUME':
        return {
          ...state,
          resumes: [payload, ...state.resumes],
          loading: false,
        };
      case 'UPDATE_RESUME':
        return {
          ...state,
          resumes: state.resumes.map((resume) =>
            resume._id === payload._id ? payload : resume
          ),
          loading: false,
        };
      case 'DELETE_RESUME':
        return {
          ...state,
          resumes: state.resumes.filter((resume) => resume._id !== payload),
          loading: false,
        };
      case 'GET_AI_SUGGESTIONS':
        return {
          ...state,
          aiSuggestions: payload,
          loading: false,
        };
      default:
        return state;
    }
  }
  