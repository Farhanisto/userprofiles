import Nav from './Nav';
import styles from '../styles/Layout.module.css';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
};

export default Layout;
