import s from './Post.module.css';
function Post(props) {
  return (
    <div className={s.Post}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStmNN7ZvPiaP_-YgIqO0lXhz7o5rsyH4PQhA&usqp=CAU" /> {props.value}
    </div>
  );
}
export default Post;
