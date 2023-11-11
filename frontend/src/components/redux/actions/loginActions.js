// export const setLoginDetails = (details) => ({
//     type: 'SET_LOGIN_DETAILS',
//     payload: details,
//   });
  

import axios from 'axios';

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('/api/login', {
        credentials: {
            email,
            password,
          },
      });

      if (typeof response.data === 'string') {
        // handle error case
      } else {
        dispatch(setLoginDetails(response.data));
      }
    } catch (error) {
      // handle error case
    }
  };
};

export const setLoginDetails = (details) => ({
  type: 'SET_LOGIN_DETAILS',
  payload: details,
});
