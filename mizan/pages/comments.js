import { useEffect, useState } from 'react';

export default function Comments() {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState('');
  const [courseId, setCourseId] = useState(1);
  const [userId, setUserId] = useState(1);

  useEffect(() => {
    fetch('/api/comments')
      .then(res => res.json())
      .then(setComments);
  }, []);

  const addComment = async (e) => {
    e.preventDefault();
    await fetch('/api/comments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, courseId: Number(courseId), userId: Number(userId) })
    });
    const res = await fetch('/api/comments');
    setComments(await res.json());
    setText('');
  };

  return (
    <div className="container">
      <h2>Course Comments</h2>
      <form onSubmit={addComment}>
        <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Your comment" required />
        <input value={courseId} onChange={(e) => setCourseId(e.target.value)} type="number" placeholder="Course ID" required />
        <input value={userId} onChange={(e) => setUserId(e.target.value)} type="number" placeholder="User ID" required />
        <button type="submit">Add Comment</button>
      </form>
      <ul>
        {comments.map(c => (
          <li key={c.id}>Course {c.courseId} - User {c.userId}: {c.text}</li>
        ))}
      </ul>
    </div>
  );
}
