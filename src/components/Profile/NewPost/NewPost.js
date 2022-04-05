import React from 'react';
import s from './NewPost.module.css';
function NewPost(props) {

  let newPostElement = React.createRef();
  //let text = newPostElement.current.value;

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = '';
  }
  return (
    <div className={s.NewPost}>
      <textarea ref={newPostElement}></textarea>
      <button onClick={addPost} >post</button>
    </div>
  );
}

export default NewPost;
