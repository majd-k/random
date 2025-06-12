import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Login() {
  const [role, setRole] = useState('student');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (typeof window !== 'undefined') {
      localStorage.setItem('role', role);
    }
    router.push('/');
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="student">Student</option>
          <option value="instructor">Instructor</option>
          <option value="coordinator">Coordinator</option>
        </select>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
