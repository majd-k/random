import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <h1>Mizān</h1>
      <nav>
        <Link href="/login">Login</Link>
        <Link href="/student/calendar">Calendar</Link>
        <Link href="/instructor/assessments">Assessments</Link>
        <Link href="/comments">Comments</Link>
        <Link href="/summary">Summary</Link>
      </nav>
    </div>
  );
}
