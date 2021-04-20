import Link from 'next/link';
import ProfileStyle from '../styles/Profile.module.css';

const ProfileItem = ({ profile, ind }) => {
  const { gender, picture, name, location } = profile[ind];
  console.log(location, '----prof');

  return (
    <Link href="/profile/[id]" as={`/profile/${profile[ind].login.uuid}`}>
      <div className={ProfileStyle.card}>
        <img src={picture.thumbnail} alt="" />
        <p>name:-{name.first + name.last} </p>
        <p>location:-{location.country} </p>
        <p>{profile.body}</p>
        <h1>&rarr;</h1>
      </div>
    </Link>
  );
};

export default ProfileItem;
