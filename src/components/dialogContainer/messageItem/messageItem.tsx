import s from './messageItem.module.scss';
import { IMessageModel } from '../../../models/index';
import AttachedFile from '../attachFile/attachedFile';

export default function MessageItem({ text, sendTime, sender, attachments }: IMessageModel) {

    function attachmentClick(file: string){
        alert(`Тут должно быть открытие файла ${file}`);
    }

    return (
        <div className={sender === "Вы" ? s.message + ' ' + s.senderYou : s.message}>
            <div className={s.messageContent}>
                <span className={s.senderName}>{sender}</span>
                <p className={s.messageText}>{text}</p>
                {attachments.length > 0 ?
                    <div className={s.attachments}>
                        <span className={s.attachmentsHeader}>Вложения ({attachments.length}):</span>
                        <div className={s.attachmentsList}>
                            {attachments.map((item, index) => <AttachedFile fileName={item} addMode={false} index={index} onClick={attachmentClick}/>)}
                        </div>
                    </div> : null
                }
                <span className={s.sendTime}>{sendTime}</span>
            </div>
        </div>
    )
}