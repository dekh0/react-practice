import DialogsPlacement from './DialogsPlacement/DialogsPlacement';
import MessagesPlacement from './MessagesPlacement/MessagesPlacement';
import s from './Dialogs.module.css';
import React from 'react';

function Dialogs(props) {
  return (
    <div className={s.Dialogs}>
      <DialogsPlacement dialogsData={props.state.dialogsData} />
      <MessagesPlacement messagesData={props.state.messagesData}/>
    </div>
  );
}

export default Dialogs;