import { click } from '@testing-library/user-event/dist/click';
import { IDialogModel, IOwnerModel, OwnerModel } from '../../../models';
import s from './chatItem.module.scss';

interface IChatItem {
    name: string,
    logo: string,
    online: boolean,
    lastMsgText: string,
    lastMsgTime: string,
    lastMsgSender: string,
    selected: boolean

    click(): void
}

export default function ChatItem({name, logo, online, lastMsgText, lastMsgTime, lastMsgSender, selected, click}: IChatItem){
    return(
        <div className={selected? s.chatItem + ' ' + s.selected : s.chatItem} onClick={click}>
            <div className={s.chatLogoOnline}>
                <img className={s.logo}
                src={logo} />
                <div className={online? s.status + ' ' + s.online : s.status + ' ' + s.offline}></div>
            </div>
            <div className={s.chatPreview}>
                <span className={s.dialogName}>{name}</span>
                {lastMsgText.length > 0 ? 
                lastMsgSender === "Вы" ? 
                <span className={s.lastMessPreview}><i>Вы:</i> {lastMsgText}</span>
                : <span className={s.lastMessPreview}>{lastMsgText}</span>
                : <i className={s.dialogEmpty}>--Диалог пуст--</i>
}
            </div>
            <div className={s.timeUnread}>
                <span className={s.time}>{lastMsgTime}</span>
            </div>
        </div>
    )
}