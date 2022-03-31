import Post from '../Post/Post';
import s from './Posts.module.css';
function Posts() {
  return (
    <div className={s.Posts}>
      <Post value='pppp' />
      <Post value='pok' />
    </div>
  );
}
export default Posts;