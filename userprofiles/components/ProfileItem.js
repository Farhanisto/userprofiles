import Link from 'next/link';
import ProfileStyle from '../styles/Profile.module.css';

const ProfileItem = ({ profile }) => {
  const { picture, name, location, login } = profile;

  return (
    <Link href="/profile/[id]" as={`/profile/${login.uuid}`}>
      <div className={ProfileStyle.card}>
        <img src={picture.medium} alt="" />
        <p>name:-{`${name.first}  ${name.last}`} </p>
        <p>location:-{location.country} </p>

        <h1>&rarr;</h1>
      </div>
    </Link>
  );
};

export default ProfileItem;
