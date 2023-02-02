import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { USER_DATA, USER_TOKEN } from "../constants/constants";
import { loginService, signUpService } from "../services";

const initialState = {
  token: localStorage.getItem(USER_TOKEN),
  user: JSON.parse(localStorage.getItem(USER_DATA)),
  loading: false,
};

const signup = createAsyncThunk(
  "auth/signup",
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await signUpService(user);
      return data;
    } catch (error) {
      return rejectWithValue("error in signup occured in service");
    }
  }
);

const login = createAsyncThunk(
  "auth/login",
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await loginService(user);
      return data;
    } catch (error) {
      return rejectWithValue("error occured in login");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signout: (state) => {
      console.log(state);
      state.token = null;
      state.user = null;
    },
  },

  extraReducers: {
    [signup.pending]: (state) => {
      state.loading = true;
    },

    [signup.fulfilled]: (state, { payload }) => {
      state.token = payload.encodedToken;
      state.user = payload.createdUser;
      state.loading = false;
    },

    [signup.rejected]: (state) => {
      state.loading = false;
    },

    [login.pending]: (state) => {
      state.loading = true;
    },
    [login.fulfilled]: (state, { payload }) => {
      state.token = payload.encodedToken;
      state.user = payload.foundUser;
      state.loading = false;
    },
    [login.rejected]: (state) => {
      state.loading = false;
    },
  },
});

const { signout } = authSlice.actions;
const authReducer = authSlice.reducer;
export { signout, authReducer, signup, login };
