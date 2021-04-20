import Nav from './Nav';
import styles from '../styles/Layout.module.css';
import Header from './Header';

const Layout = ({ children }) => (
  <>
    <Nav />
    <div className={styles.container}>
      <div>dldldl</div>
      <main className={styles.main}>
        <Header />
        {children}
      </main>
    </div>
  </>
);

export default Layout;
