import HeaderStyle from '../styles/Header.module.css';
const Header = () => (
  <div className="headerContainer">
    <h1 className={HeaderStyle.title}>
      <span>User</span>Profiles
    </h1>

    <p className={HeaderStyle.description}>Search</p>
    <input type="text" />
  </div>
);

export default Header;
