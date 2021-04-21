import Head from 'next/head';
import React, { useEffect } from 'react';
import ProfileList from '../components/ProfileList';
import { useStore } from '../store/store';

export default function Home() {
  const { getProfiles } = useStore();

  useEffect(() => {
    getProfiles();
  }, [getProfiles]);

  return (
    <div>
      <Head>
        <title>User Profiles</title>
      </Head>

      <ProfileList />
    </div>
  );
}

// export const getStaticProps = async () => {
//   const res = await fetch('https://randomuser.me/api/?results=6');

//   const profiles = await res.json();

//   return {
//     props: {
//       profiles
//     }
//   };
// };
