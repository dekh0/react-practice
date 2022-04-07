import s from './Message.module.css';
import React from 'react';

function Message(props) {
  return (
    <div className={s.DialogsItem}>
      {props.message}
    </div>
  )
}

export default Message;
