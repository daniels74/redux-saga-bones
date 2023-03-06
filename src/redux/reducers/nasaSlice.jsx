import { createSlice } from "@reduxjs/toolkit";

const nasaSlice = createSlice({
  name: "nasa",
  initialState: {},
  reducers: {
    getNasa() {},
    setNasa(state, action) {
      const nasaData = action.payload;
      return { ...state, ...nasaData };
    }
  }
});

export const { getNasa, setNasa } = nasaSlice.actions;

export default nasaSlice.reducer;
