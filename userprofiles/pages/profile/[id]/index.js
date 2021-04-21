import ProfileStyle from '../../../styles/Profile.module.css';

const Profile = ({ profile }) => {
  const { name, location, picture } = profile.results[0];

  return (
    <div className={ProfileStyle.card}>
      <img src={picture.large} alt="" />
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

export default Profile;
