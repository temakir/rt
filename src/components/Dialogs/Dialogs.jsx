import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div className={s.dialog+' '+s.active}>
                    Dmitry
                </div>
                <div className={s.dialog}>
                    Alex
                </div>
                <div className={s.dialog}>
                    Vikor
                </div>
                <div className={s.dialog}>
                    Roman
                </div>
                <div className={s.dialog}>
                    Valentina
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>Yo</div>
                <div className={s.message}>By</div>
            </div>
        </div>
    )
}

export default Dialogs;