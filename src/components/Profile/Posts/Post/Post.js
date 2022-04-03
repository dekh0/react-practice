import s from './Post.module.css';
function Post(props) {
  return (
    <div className={s.Post}>
      <img src="https://images.newscientist.com/wp-content/uploads/2020/09/22145012/big-frog-eyes.jpg?crop=4:3,smart&width=1200&height=900&upscale=true" /> {props.value}
    </div>
  );
}
export default Post;
