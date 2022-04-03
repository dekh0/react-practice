import React from 'react';
import s from './NewPost.module.css';
function NewPost(props) {

  let newPostElement = React.createRef();

  return (
    <div className={s.NewPost}>
      <textarea ref={newPostElement}></textarea>
      <button onClick={props.addPost} >post</button>
    </div>
  );
}

export default NewPost;
