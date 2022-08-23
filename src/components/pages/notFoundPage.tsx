import { Link } from 'react-router-dom';

export default function Notfoundpage() {
  return (
    <div className="pages">
      this page doesnt exit. Go
      {' '}
      <Link to="/"> home </Link>
    </div>
  );
}
