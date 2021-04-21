import '../styles/globals.css';
import Layout from '../components/Layout';
import { StoreProvider } from '../store/store';

const MyApp = ({ Component, pageProps }) => {
  return (
    <StoreProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StoreProvider>
  );
};

export default MyApp;
