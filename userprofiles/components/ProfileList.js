import ProfileStyle from '../styles/Profile.module.css';
import ProfileItem from './ProfileItem';
import { useStore } from '../store/store';

const ProfileList = () => {
  const { filteredProfiles } = useStore();

  return (
    <div className={ProfileStyle.grid}>
      {filteredProfiles &&
        filteredProfiles.map((profile) => (
          <ProfileItem key={profile.login.uuid} profile={profile} />
        ))}
    </div>
  );
};

export default ProfileList;
