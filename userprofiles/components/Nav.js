import Link from 'next/link';
import navStyles from '../styles/Nav.module.css';

const Nav = () => (
  <nav className={navStyles.nav}>
    <ul>
      <li>
        <Link href="/">home</Link>
      </li>
      <li>
        <Link href="/about">about</Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
