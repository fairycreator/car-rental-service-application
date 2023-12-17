import { SET_CURRENT_STEP, UPDATE_FORM_DATA, LOAD_INITIAL_DATA } from './signUpActions';

const initialState = {
  step: 1,
  formData: {
    name: '',
    email: '',
    password: '',
    goal: '',
    gender: '',
    age: '',
    height: '',
    weight: '',
    activityLevel: '',
    avatar: '',
  },
};

export const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_STEP:
      return {
        ...state,
        step: action.payload,
      };
    case UPDATE_FORM_DATA:
      return {
        ...state,
        formData: {
          ...state.formData,
          ...action.payload,
        },
      };
    case LOAD_INITIAL_DATA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
