import { useEffect, useState } from 'react';

export default function Assessments() {
  const [assessments, setAssessments] = useState([]);
  const [title, setTitle] = useState('');
  const [courseId, setCourseId] = useState(1);
  const [dueDate, setDueDate] = useState('');

  useEffect(() => {
    fetch('/api/assessments')
      .then((res) => res.json())
      .then(setAssessments);
  }, []);

  const addAssessment = async (e) => {
    e.preventDefault();
    await fetch('/api/assessments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, courseId: Number(courseId), dueDate })
    });
    const res = await fetch('/api/assessments');
    setAssessments(await res.json());
    setTitle('');
    setDueDate('');
  };

  const deleteAssessment = async (id) => {
    await fetch('/api/assessments?id=' + id, { method: 'DELETE' });
    const res = await fetch('/api/assessments');
    setAssessments(await res.json());
  };

  return (
    <div className="container">
      <h2>Assessments</h2>
      <form onSubmit={addAssessment}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
        <input value={courseId} onChange={(e) => setCourseId(e.target.value)} type="number" placeholder="Course ID" required />
        <input value={dueDate} onChange={(e) => setDueDate(e.target.value)} type="date" required />
        <button type="submit">Add</button>
      </form>
      <ul>
        {assessments.map(a => (
          <li key={a.id}>
            {a.title} (Course {a.courseId}) due {a.dueDate}
            <button onClick={() => deleteAssessment(a.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
