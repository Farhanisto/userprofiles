import Head from 'next/head';
import React, { useEffect } from 'react';
import ProfileList from '../components/ProfileList';
import { useStore } from '../store/store';

export default function Home({ profiles }) {
  const { getProfiles } = useStore();

  useEffect(() => {
    getProfiles();
  }, []);

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
