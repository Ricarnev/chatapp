import { useStore } from 'effector-react';
import { $currentDialogIndex, $dialogTemplates, $originalDialogs, addMessage, clearInputFiles, clearMessages, editInputFiles, setMessageText } from '../../store/store';
import s from './dialogContainer.module.scss';
import SendInput from './messageInput/messageInput';
import MessageItem from './messageItem/messageItem';

export default function DialogContainer() {
    const selectedIndex = useStore($currentDialogIndex);
    const dialogs = useStore($originalDialogs);

    return (
        <div className={s.dialogContainer}>
            <div className={s.dialogHeader}>
                <div className={s.dialogDetails}>
                    <div className={dialogs[selectedIndex].user.online ? s.dialogLogo : s.dialogLogo + ' ' + s.offline}>
                        <img src={dialogs[selectedIndex].user.logo} alt="Аватар пользователя"/>
                    </div>
                    <span className={s.dialogName}>{dialogs[selectedIndex].user.name}</span>
                </div>
            </div>
            <div className={s.messagesContainer}>
                {dialogs[selectedIndex].messages.length > 0 ? dialogs[selectedIndex].messages.map(item =>
                    <MessageItem text={item.text} sendTime={item.sendTime} sender={item.sender} attachments={item.attachments} />)
                    : <span className={s.noMessages}>Начните общение прямо сейчас</span>}
            </div>
            <SendInput />
        </div>
    )
}