import { useState } from "react";



export default function App() {
  const students = [
    { name: 'Alice', marks: 90 }, { name: 'Bob', marks: 80 }, { name: 'Charlie', marks: 85 },
    { name: 'David', marks: 70 }, { name: 'Eve', marks: 95 }, { name: 'Frank', marks: 60 }
  ];

  const [page, setPage] = useState(0);
  const perPage = 3;

  return (
    <div>
      <ul>
        {students.slice(page * perPage, (page + 1) * perPage).map(s => (
          <li key={s.name}>{s.name}: {s.marks}</li>
        ))}
      </ul>
      <button disabled={page === 0} onClick={() => setPage(page - 1)}>Previous</button>
      <button disabled={(page + 1) * perPage >= students.length} onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
}
