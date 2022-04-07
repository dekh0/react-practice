import Message from './Message/Message';
import s from './MessagesPlacement.module.css';
import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../redux/dialogsReducer";

function MessagesPlacement(props) {

  let state = props.store.getState().dialogsPage;
  let messagesComponents = state.messages.map(m =>
    <Message message={m.message} />);

  let newMessageBody = state.newMessageBody;
  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  }
  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body));
  }

  return (
    <div className={s.MessagesPlacement}>
      <div>{messagesComponents}</div>
      <div>
        <div><textarea value={newMessageBody}
          onChange={onNewMessageChange}
          placeholder='Enter your message'></textarea></div>
        <div><button onClick={onSendMessageClick}>Send</button></div>
      </div>
    </div>
  );
}

export default MessagesPlacement;
