import { useEffect, useState } from 'react';

export default function Summary() {
  const [summary, setSummary] = useState([]);

  useEffect(() => {
    fetch('/api/summary')
      .then(res => res.json())
      .then(setSummary);
  }, []);

  return (
    <div className="container">
      <h2>Workload Summary</h2>
      <ul>
        {summary.map(item => (
          <li key={item.courseId}>Course {item.courseId}: {item.count} assessments</li>
        ))}
      </ul>
    </div>
  );
}
