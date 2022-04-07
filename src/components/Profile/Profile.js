
import NewPost from './NewPost/NewPost';
import Posts from './Posts/Posts';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import s from './Profile.module.css';
import React from 'react';

function Profile(props) {
  return (
    <div className={s.Profile}>
      <ProfileHeader />
      {/* <NewPost /> */}
      <Posts posts={props.profilePage.posts}
        newPostText={props.profilePage.newPostText}
        dispatch={props.dispatch} />
    </div>
  );
}

export default Profile;
