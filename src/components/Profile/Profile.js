
import NewPost from './NewPost/NewPost';
import Posts from './Posts/Posts';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import s from './Profile.module.css';

function Profile(props) {
  return (
    <div className={s.Profile}>
      <ProfileHeader />
      <NewPost addPost={props.addPost}  />
      <Posts postsData={props.state.postsData} />
    </div>
  );
}

export default Profile;
