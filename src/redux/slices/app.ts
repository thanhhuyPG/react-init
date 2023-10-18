import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface AppState {
  initState: boolean;
}

const initialState: AppState = {
  initState: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setState: (state, action: PayloadAction<boolean>) => {
      state.initState = action.payload;
    },
  },
});

export const { setState } = appSlice.actions;

export default appSlice.reducer;
