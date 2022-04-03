import s from './Message.module.css';

function Message(props) {
  return (
    <div className={s.DialogsItem}>
      {props.message}
    </div>
  )
}

export default Message;
