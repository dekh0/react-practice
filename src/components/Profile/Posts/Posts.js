import React from 'react';
import s from './Posts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";



const Posts = (props) => {
    let postsElements =
        props.posts.map( 
          p => <Post message={p.message} likesCount={p.likesCount}/>
          );

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={ onPostChange } ref={newPostElement}
                              value={props.newPostText} />
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    )
}

export default Posts;









// import Post from './Post/Post';
// import s from './Posts.module.css';
// import React from 'react';

// function Posts(props) {

//   let postsComponents = props.postsData.map(post =>
//     <Post id={post.id} value={post.post} />)
  
//   return (
//     <div className={s.Posts}>
//       {postsComponents}
//     </div>
//   );
// }

// export default Posts;