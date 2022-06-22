import { useStore } from 'effector-react';
import { IMessageModel } from '../../models';
import { $currentDialogIndex, $dialogsList, $searchValue, clearInputFiles, selectDialog, setMessageText, setSearch } from '../../store/store';
import ChatItem from './chatItem/chatItem';
import s from './chatsContainer.module.scss';

export default function ChatsContainer() {
    const dialogs = useStore($dialogsList);
    const searchValue = useStore($searchValue);
    const selectedIndex = useStore($currentDialogIndex);

    function selectDialogFunc(id: number) {
        selectDialog(id);
    }

    function lastDisplayMessage(messages: IMessageModel[]) {
        if (messages.length > 0) {
            if (messages[messages.length - 1].text.length > 0)
                return messages[messages.length - 1].text.slice(0, 55);
            else if (messages[messages.length - 1].attachments.length > 0)
                return 'Вложение';
            else
                return '';
        }
        else
            return '';
    }

    return (
        <div className={s.chatsContainer}>
            <input className={s.searchInput}
                placeholder="Поиск..."
                value={searchValue}
                onChange={e => setSearch(e.target.value)} />
            <div className={s.chats}>
                {dialogs.length > 0 ?
                    dialogs.map(item => <ChatItem key={item.id}
                        selected={item.id === selectedIndex ? true : false}
                        name={item.user.name}
                        logo={item.user.logo}
                        online={item.user.online}
                        lastMsgText={lastDisplayMessage(item.messages)}
                        lastMsgTime={item.messages.length > 0 ? item.messages[item.messages.length - 1].sendTime : ''}
                        lastMsgSender={item.messages.length > 0 ? item.messages[item.messages.length - 1].sender : ''}
                        click={() => selectDialogFunc(item.id)} />)
                    : <span className={s.dialogsNotFound}>Диалоги не найдены</span>}
            </div>
        </div>
    )
}