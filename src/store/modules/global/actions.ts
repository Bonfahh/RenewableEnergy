export const signUp = (
  firstName: string,
  lastName: string,
  email: string,
  password: string,
) => {
  return {
    type: '@global/SIGN_UP',
    payload: {firstName, lastName, email, password},
  };
};

export const loginSuccess = () => {
  return {
    type: '@global/LOGIN_SUCCESS',
  };
};
