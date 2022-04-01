import s from './Dialogs.module.css';

function Dialogs() {
  return (
    <div className={s.Dialogs}>
      <div className={s.DialogsItems}>
        <div className={s.DialogsItem}>
          Misha
        </div>
        <div className={s.DialogsItem}>
          Marusya
        </div>
        <div className={s.DialogsItem}>
          Lyaguska
        </div>
        <div className={s.DialogsItem}>
          Violetta
        </div>
      </div>

      <div className={s.Messages}>
        <div className={s.Message}>
          KWAK
        </div>
        <div className={s.Message}>
          PUK
        </div>
        <div className={s.Message}>
          KRYA
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
