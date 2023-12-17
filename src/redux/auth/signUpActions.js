// Action Types
export const SET_CURRENT_STEP = 'SET_CURRENT_STEP';
export const UPDATE_FORM_DATA = 'UPDATE_FORM_DATA';
export const SUBMIT_FORM_DATA = 'SUBMIT_FORM_DATA';
export const LOAD_INITIAL_DATA = 'LOAD_INITIAL_DATA';

// Helper function to save the current state to local storage
const saveToLocalStorage = (state) => {
  localStorage.setItem('signupFormData', JSON.stringify(state.formData));
  localStorage.setItem('signupStep', JSON.stringify(state.step));
};

// Action Creators
export const setCurrentStep = (step) => {
  return (dispatch, getState) => {
    dispatch({ type: SET_CURRENT_STEP, payload: step });
    saveToLocalStorage(getState().signUp);
  };
};

export const updateFormData = (data) => {
  return (dispatch, getState) => {
    dispatch({ type: UPDATE_FORM_DATA, payload: data });
    saveToLocalStorage(getState().signUp);
  };
};

export const submitFormData = (data) => {
  return (dispatch) => {
    // API call
    console.log('Final submission data:', data);
    dispatch({ type: SUBMIT_FORM_DATA });
    // Clear local storage after submission
    localStorage.removeItem('signupFormData');
    localStorage.removeItem('signupStep');
  };
};

export const loadInitialData = () => {
  return (dispatch) => {
    const formData = JSON.parse(localStorage.getItem('signupFormData')) || {
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
    };
    const step = JSON.parse(localStorage.getItem('signupStep')) || 1;

    dispatch({ type: LOAD_INITIAL_DATA, payload: { formData, step } });
  };
};
