import s from './ProfileHeader.module.css';
function ProfileHeader() {
  return (
    <div className={s.ProfileHeader}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZr75mAVhEhqMCtTp_3F2j8VKDAnI46hYHpw&usqp=CAU" />
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1b5w_9Xw6roI-ZeL5rtP-CXot-t0q1CzOtQ&usqp=CAU" />
    </div>
  );
}

export default ProfileHeader;
