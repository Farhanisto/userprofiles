import Head from 'next/head';
import ProfileList from '../components/ProfileList';

export default function Home({ profiles }) {
  return (
    <div>
      <Head>
        <title>User Profiles</title>
      </Head>

      <ProfileList profiles={profiles.results} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch('https://randomuser.me/api/?results=6');

  const profiles = await res.json();

  return {
    props: {
      profiles
    }
  };
};
