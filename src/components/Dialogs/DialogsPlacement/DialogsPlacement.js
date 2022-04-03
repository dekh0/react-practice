import DialogItem from './DialogItem/DialogItem';
import s from './DialogsPlacement.module.css';

function DialogsPlacement(props) {
  let dialogsComponents = props.dialogsData.map(dialog =>
    <DialogItem id={dialog.id} name={dialog.dialog} />)
    return (
      <div className={s.DialogsPlacement}>
      {dialogsComponents}
    </div>
  );
}

export default DialogsPlacement;