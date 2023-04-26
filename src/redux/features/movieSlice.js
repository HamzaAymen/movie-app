import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  apikey: import.meta.env.VITE_API_KEY,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
});

export default movieSlice.reducer;
