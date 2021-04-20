import ProfileStyle from '../styles/Profile.module.css';
import ProfileItem from './ProfileItem';
import { useStore } from '../store/store';

const ProfileList = ({ profiles }) => {
  const value = useStore();
  console.log(value, '----prof2');

  return (
    <div className={ProfileStyle.grid}>
      {profiles.map((profile, ind) => (
        <ProfileItem key={profile.id} profile={profiles} ind={ind} />
      ))}
    </div>
  );
};

export default ProfileList;
