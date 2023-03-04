import { NavLink } from 'react-router-dom';
import styles from '../styles/Navbar.module.scss';

const Navbar = () => (
  <header className={styles.nav}>
    <nav className="d-flex justify-content-between align-items-center">
      <div className="d-flex flex-wrap align-items-center">
        <NavLink className={styles.brand} to="/">Bookstore CMS</NavLink>
        <ul className="d-flex flex-wrap align-items-center">
          <li className="list-group-item px-2">
            <NavLink
              className={({ isActive }) => (isActive ? 'link-active nav_link' : 'nav_link')}
              to="/"
            >
              Books
            </NavLink>
          </li>
          <li className="list-group-item px-2">
            <NavLink
              className={({ isActive }) => (isActive ? 'link-active nav_link' : 'nav_link')}
              to="/categories"
            >
              Categories
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <NavLink to="/">
          {' '}
          <i className="fa fa-user-circle-o fa-2x" style={{ color: '#0290ff' }} aria-hidden="true" />
        </NavLink>
      </div>
    </nav>
  </header>
);

export default Navbar;
