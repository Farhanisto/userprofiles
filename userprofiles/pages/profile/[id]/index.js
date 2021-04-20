import { useRouter } from 'next/router';

import ProfileStyle from '../../../styles/Profile.module.css';

const Profile = ({ profile }) => {
  console.log(profile.results[0].gender, 'profile');
  // const router = useRouter();
  // const { id } = router.query;

  const { gender, name, location, picture } = profile.results[0];

  return (
    <div className={ProfileStyle.card}>
      <img src={picture.thumbnail} alt="" />
      <p>name:-{name.first + name.last} </p>
      <p>location:-{location.country} </p>
      <p>{profile.body}</p>
      <h1>&rarr;</h1>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const profiles = fetch(`https://randomuser.me/api/?id=${context.params.id}`);
  const profile = await (await profiles).json();

  return {
    props: { profile }
  };
};

// export const getStaticProps = async (context) => {
//   console.log(context, '-----COntexe');
//   const profiles = await fetch(
//     `https://randomuser.me/api/?id=${context.params.id}`
//   );
//   console.log(profiles, 'profilesssssssss');
//   const profile = await profiles.json();

//   if (!profile) {
//     console.log('no data');
//   }

//   return {
//     props: { profile }
//   };
// };

// export const getStaticPaths = async () => {
//   const profiles = await fetch('https://randomuser.me/api/');

//   const res = await profiles.json();

//   const ids = res.results.map((profile) => profile.login.uuid);

//   const paths = ids.map((id) => ({ params: { id: id.toString() } }));
//   console.log(paths, 'ppatthes');

//   return {
//     paths,
//     fallback: false
//   };
// };

export default Profile;
