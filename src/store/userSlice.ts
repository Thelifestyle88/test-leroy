import { createSlice } from '@reduxjs/toolkit';

import { TUser, usersMock } from '../services/constants';

type State = {
  users: TUser[];
  filteredUsers: TUser[] | never[];
};

const initialState: State = {
  users: usersMock,
  filteredUsers: usersMock,
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser(state) {
      state.users.push({ name: 'name', surname: 'surname', age: 16, email: '' });
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
          if (action.payload.valueMin !== '' && action.payload.valueMax !== '') {
            return true;
          }
        }),
      };
    },
  },
});

export const { addUser, filterUser } = userSlice.actions;
export default userSlice.reducer;
