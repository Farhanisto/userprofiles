import Link from 'next/link';
import ProfileStyle from '../styles/Profile.module.css';
import { useStore } from '../store/store';

const ProfileItem = ({ profile, ind }) => {
  const { gender, picture, name, location, login } = profile;
  const value = useStore();
  console.log(value.filteredProfiles, '----prof3');

  return (
    <Link href="/profile/[id]" as={`/profile/${login.uuid}`}>
      <div className={ProfileStyle.card}>
        <img src={picture.medium} alt="" />
        <p>name:-{name.first + name.last} </p>
        <p>location:-{location.country} </p>
        <h1 style={{ color: value }}>tfar</h1>
        <p>{profile.body}</p>
        <h1>&rarr;</h1>
      </div>
    </Link>
  );
};

export default ProfileItem;
