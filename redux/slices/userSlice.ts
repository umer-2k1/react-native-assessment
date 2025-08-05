 
import { getGithubUserDetails, listGithubUsers } from '@/services';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
interface GitHubUser {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  name?: string;
  location?: string;
  followers?: number;
  following?: number;
}

interface UserState {
  users: GitHubUser[];
  user: GitHubUser | null;
  loading: boolean
  userLoader: boolean
}


const initialState: UserState = {
  users: [],
  user: null,
  loading: false,
  userLoader: false

};

 

export const selectUser = createAsyncThunk('user/select', async (username: string) => {
  return await getGithubUserDetails(username);
});


export const listUsers = createAsyncThunk(
  'user/listUsers',
  async ({ since = 0, perPage = 30 }: { since: number; perPage?: number }) => {
    const users = await listGithubUsers(since, perPage);
    return users;
  }
);


const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    closeModal(state) {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
     .addCase(listUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(listUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.loading = false;

      })
      .addCase(selectUser.pending, (state, action) => {
                state.userLoader = true;

      })
      .addCase(selectUser.fulfilled, (state, action) => {
        state.user = action.payload;
                state.userLoader = false;

      });
  },
});


export const { closeModal } = userSlice.actions;
export default userSlice.reducer;
export type { GitHubUser };

