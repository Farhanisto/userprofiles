import Nav from './Nav';
import styles from '../styles/Layout.module.css';
import Header from './Header';
import { useStore } from '../store/store';

const Layout = ({ children }) => {
  const value = useStore();
  console.log(value, '----prof');

  return (
    <>
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
