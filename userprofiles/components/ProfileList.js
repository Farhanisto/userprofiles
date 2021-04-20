import ProfileStyle from '../styles/Profile.module.css';
import ProfileItem from './ProfileItem';

const ArticleList = ({ profiles }) => (
  <div className={ProfileStyle.grid}>
    {profiles.map((profile, ind) => (
      <ProfileItem key={profile.id} profile={profiles} ind={ind} />
    ))}
  </div>
);

export default ArticleList;
