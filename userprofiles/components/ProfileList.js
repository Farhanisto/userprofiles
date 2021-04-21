import ProfileStyle from '../styles/Profile.module.css';
import ProfileItem from './ProfileItem';
import { useStore } from '../store/store';

const ProfileList = () => {
  const { filteredProfiles } = useStore();
  console.log(filteredProfiles, '----prof2');

  return (
    <div className={ProfileStyle.grid}>
      {filteredProfiles &&
        filteredProfiles.map((profile, ind) => (
          <ProfileItem key={profile.id} profile={profile} ind={ind} />
        ))}
    </div>
  );
};

export default ProfileList;
