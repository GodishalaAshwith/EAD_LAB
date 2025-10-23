import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { sortAscending, sortDescending } from "./store";

function App() {
  const students = useSelector((state) => state.students.list);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center", padding: 20 }}>
      <h2>Student List</h2>
      <div>
        <button onClick={() => dispatch(sortAscending())}>
          Sort Ascending
        </button>
        <button
          onClick={() => dispatch(sortDescending())}
          style={{ marginLeft: 10 }}
        >
          Sort Descending
        </button>
      </div>

      <ul style={{ listStyle: "none", padding: 0, marginTop: 20 }}>
        {students.map((s, i) => (
          <li key={i}>
            {s.name} — {s.marks}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
