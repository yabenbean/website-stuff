const INITAL_STATE = {
  apiCalls: {
    airQuality: false,
    airticles: false,
  },
};

const spinnerReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case "SET_AIR_QUALITY":
      return {
        ...state,
        apiCalls: {
          ...state.apiCalls,
          airQuality: action.payload,
        },
      };

    case "SET_ARTICLES": {
      return {
        ...state,
        apiCalls: {
          ...state.apiCalls,
          articles: action.payload,
        },
      };
    }
    default:
      return state;
  }
};

export default spinnerReducer;
