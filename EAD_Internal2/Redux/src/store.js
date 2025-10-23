import { configureStore, createSlice } from "@reduxjs/toolkit";

const studentSlice = createSlice({
  name: "students",
  initialState: {
    list: [
      { name: "Alice", marks: 85 },
      { name: "Bob", marks: 78 },
      { name: "Charlie", marks: 92 },
      { name: "David", marks: 88 },
    ],
  },
  reducers: {
    sortAscending: (state) => {
      state.list.sort((a, b) => a.marks - b.marks);
    },
    sortDescending: (state) => {
      state.list.sort((a, b) => b.marks - a.marks);
    },
  },
});

export const { sortAscending, sortDescending } = studentSlice.actions;
export const store = configureStore({
  reducer: {
    students: studentSlice.reducer,
  },
});
