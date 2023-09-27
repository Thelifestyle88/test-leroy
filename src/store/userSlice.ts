import { createSlice } from '@reduxjs/toolkit';

import { usersMock } from '../services/constants';
import { TUser } from '../services/types';

type State = {
  users: TUser[];
  filteredUsers: TUser[];
};

const initialState: State = {
  users: usersMock,
  filteredUsers: usersMock,
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser(state, action) {
      state.users.push({
        name: action.payload.name,
        surname: action.payload.surname,
        age: Number(action.payload.age),
        email: action.payload.email,
      });
      state.filteredUsers.push({
        name: action.payload.name,
        surname: action.payload.surname,
        age: Number(action.payload.age),
        email: action.payload.email,
      });
    },
    filterUser(state, action) {
      return {
        ...state,
        // eslint-disable-next-line array-callback-return, consistent-return
        filteredUsers: [...state.users].filter((user) => {
          if (action.payload.valueMin !== '' && action.payload.valueMax !== '') {
            return (
              user.age >= Number(action.payload.valueMin) &&
              user.age <= Number(action.payload.valueMax)
            );
          }
          if (action.payload.valueMin === '' && action.payload.valueMax !== '') {
            return user.age <= Number(action.payload.valueMax);
          }
          if (action.payload.valueMin !== '' && action.payload.valueMax === '') {
            return user.age >= Number(action.payload.valueMin);
          }
          if (action.payload.valueMin === '' && action.payload.valueMax === '') {
            return user;
          }
        }),
      };
    },
  },
});

export const { addUser, filterUser } = userSlice.actions;
export default userSlice.reducer;
