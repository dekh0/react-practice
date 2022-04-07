import s from './DialogItem.module.css';
import React from 'react';

function DialogsItem(props) {
  return (
    <div className={s.DialogsItem}>
      {props.name}
    </div>
  )
}

export default DialogsItem;
