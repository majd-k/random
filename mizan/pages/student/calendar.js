import { useEffect, useState } from 'react';

export default function Calendar() {
  const [assessments, setAssessments] = useState([]);

  useEffect(() => {
    fetch('/api/assessments')
      .then(res => res.json())
      .then(setAssessments);
  }, []);

  return (
    <div className="container">
      <h2>Assessment Calendar</h2>
      <ul>
        {assessments.map(a => (
          <li key={a.id}>{a.dueDate}: {a.title} (Course {a.courseId})</li>
        ))}
      </ul>
      <button onClick={() => alert('Synced to Google Calendar!')}>Sync to Google Calendar</button>
    </div>
  );
}
