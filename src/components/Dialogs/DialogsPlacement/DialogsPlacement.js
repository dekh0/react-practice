import DialogItem from './DialogItem/DialogItem';
import s from './DialogsPlacement.module.css';
import React from 'react';

function DialogsPlacement(props) {

  let state = props.store.getState().dialogsPage;
  let dialogsComponents = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);

  return (
    <div className={s.DialogsPlacement}>
      {dialogsComponents}
    </div>
  );
}

export default DialogsPlacement;