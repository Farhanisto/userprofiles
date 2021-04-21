import HeaderStyle from '../styles/Header.module.css';
import { useStore } from '../store/store';

const Header = () => {
  const { search, searchTerm } = useStore();

  return (
    <div className="headerContainer">
      <h1 className={HeaderStyle.title}>
        <span>User</span>Profiles
      </h1>

      <p className={HeaderStyle.description}>Search</p>
      <input
        type="text"
        placeholder="search by first naem"
        value={search}
        onChange={(event) => searchTerm(event.target.value)}
      />
    </div>
  );
};

export default Header;
