export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectIsRefreshing = (state) => state.auth.isRefreshing;
// export const selectUserAuthenticated = (state) => state.auth.authenticated;    ???
export const selectUserIsLoading = (state) => state.auth.isLoading;
export const selectUserError = (state) => state.auth.error;
export const selectUserToken = (state) => state.auth.token;

export const selectUserData = (state) => state.auth.userData;
export const selectUsername = (state) => state.auth.userData.name;
export const selectUserEmail = (state) => state.auth.userData.email;
export const selectUserGoal = (state) => state.auth.userData.goal;
export const selectUserGender = (state) => state.auth.userData.gender;
export const selectUserAge = (state) => state.auth.userData.age;
export const selectUserHeight = (state) => state.auth.userData.height;
export const selectUserWeight = (state) => state.auth.userData.weight;
export const selectUserActivityLevel = (state) =>
  state.auth.userData.activityLevel;
export const selectUserAvatar = (state) => state.auth.userData.avatar;
export const selectUserWaterRate = (state) => state.auth.userData.waterRate;
export const selectUserBMRRate = (state) => state.auth.userData.BMRRate;
export const selectUserProteinRate = (state) => state.auth.userData.proteinRate;
export const selectUserFatRate = (state) => state.auth.userData.fatRate;
export const selectUserCarbsRate = (state) => state.auth.userData.carbsRate;
