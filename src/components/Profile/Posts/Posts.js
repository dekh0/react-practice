import Post from './Post/Post';
import s from './Posts.module.css';

function Posts(props) {

  let postsComponents = props.postsData.map(post =>
    <Post id={post.id} value={post.post} />)
  
  return (
    <div className={s.Posts}>
      {postsComponents}
    </div>
  );
}

export default Posts;