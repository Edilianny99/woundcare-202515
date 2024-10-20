import { createSlice } from "@reduxjs/toolkit";
import type { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit";

export interface IAuthState {
  authState: boolean;
  token: string;
  role: string;
  rehydrated: boolean;
}

export interface IAuthPayload {
  token: string;
  role: string;
}

const initialState: IAuthState = {
  authState: false,
  token: "",
  role: "",
  rehydrated: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<IAuthPayload>) => {
      state.authState = true;
      state.token = action.payload.token;
      state.role = action.payload.role;
    },
    logout: (state) => {
      state.authState = false;
      state.token = "";
      state.role = "";
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<IAuthState>) => {
    builder.addCase("persist/REHYDRATE", (state, action: any) => {
      state.rehydrated = true; // Set it to true when the state is rehydrated
      if (action.payload) {
        state.authState = action.payload.authState === "true";
        state.token = action.payload.token.replace(/"/g, "");
        state.role = action.payload.role.replace(/"/g, "");
      }
    });
  },
});

export const { login, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
