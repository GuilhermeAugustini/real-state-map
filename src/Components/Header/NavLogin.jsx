import { Link } from 'react-router-dom';
import { login, button } from './Header.module.scss';

export default function NavLogin() {
  return (
    <div className={login}>
      <Link to="/signin">Sign in</Link>
      <Link to="/login" className={button}>
        Login
      </Link>
    </div>
  );
}
