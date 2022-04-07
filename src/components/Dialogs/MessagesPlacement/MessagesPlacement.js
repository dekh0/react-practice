import Message from './Message/Message';
import s from './MessagesPlacement.module.css';
import React from 'react';

function MessagesPlacement(props) {

  let messagesComponents = props.messagesData.map(message =>
    <Message id={message.id} message={message.dialog} />)

  return (
    <div className={s.MessagesPlacement}>
      {messagesComponents}
    </div>
  );
}

export default MessagesPlacement;
