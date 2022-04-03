import s from './DialogItem.module.css';

function DialogsItem(props) {
  return (
    <div className={s.DialogsItem}>
      {props.name}
    </div>
  )
}

export default DialogsItem;
