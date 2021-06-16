import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import Navbar from './Navbar';
import NavLogin from './NavLogin';

import { header } from './Header.module.scss';
import useMedia from '../../Hooks/useMedia';

export default function Header() {
  const isDesktop = useMedia(968);

  return (
    <header className={header}>
      <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link>

      {isDesktop && (
        <>
          <Navbar />
          <NavLogin />
        </>
      )}
    </header>
  );
}
