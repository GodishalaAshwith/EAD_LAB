// npm install @reduxjs/toolkit react-redux
import React from 'react';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider, useSelector, useDispatch } from 'react-redux';

const slice = createSlice({
  name: 'students',
  initialState: [{ name: 'A', marks: 50 }, { name: 'B', marks: 90 }, { name: 'C', marks: 70 }],
  reducers: {
    sortAsc: (state) => { state.sort((a, b) => a.marks - b.marks); },
    sortDesc: (state) => { state.sort((a, b) => b.marks - a.marks); }
  }
});

const store = configureStore({ reducer: { students: slice.reducer } });

const List = () => {
  const students = useSelector(state => state.students);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(slice.actions.sortAsc())}>Sort Asc</button>
      <button onClick={() => dispatch(slice.actions.sortDesc())}>Sort Desc</button>
      {students.map((s, i) => <div key={i}>{s.name}: {s.marks}</div>)}
    </div>
  );
};

export default () => <Provider store={store}><List /></Provider>;