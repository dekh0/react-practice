
import NewPost from './NewPost/NewPost';
import Posts from './Posts/Posts/Posts';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import s from './Profile.module.css';

function Content() {
  return (
    <div className={s.content}>
      <ProfileHeader />
      <NewPost />
      <Posts />
    </div>
  );
}

export default Content;
