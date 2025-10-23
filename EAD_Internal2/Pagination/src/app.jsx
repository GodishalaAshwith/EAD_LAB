import { useState } from "preact/hooks";
import preactLogo from "./assets/preact.svg";
import viteLogo from "/vite.svg";
import "./app.css";

export function App() {
  const students = [
    { name: "Alice", marks: 85 },
    { name: "Bob", marks: 78 },
    { name: "Charlie", marks: 92 },
    { name: "David", marks: 88 },
    { name: "Eve", marks: 95 },
    { name: "Frank", marks: 80 },
    { name: "Grace", marks: 90 },
  ];

  const [page, setPage] = useState(1);
  const perPage = 3;
  const totalPages = Math.ceil(students.length / perPage);

  const start = (page - 1) * perPage;
  const current = students.slice(start, start + perPage);

  return (
    <div style={{ textAlign: "center", padding: 20 }}>
      <h2>Student List</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {current.map((s, i) => (
          <li key={i}>
            {s.name} — {s.marks}
          </li>
        ))}
      </ul>
      <button
        onClick={() => setPage((p) => Math.max(p - 1, 1))}
        disabled={page === 1}
      >
        Prev
      </button>
      <span style={{ margin: "0 10px" }}>
        Page {page} of {totalPages}
      </span>
      <button
        onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
        disabled={page === totalPages}
      >
        Next
      </button>
    </div>
  );
}
