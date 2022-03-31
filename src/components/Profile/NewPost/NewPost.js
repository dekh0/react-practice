import s from './NewPost.module.css';
function NewPost() {
  return (
    <div className={s.NewPost}>
     <input type="text"/><input type='button' value={'de'}/>
    </div>
  );
}

export default NewPost;
