import { useStore } from 'effector-react';
import { $currentDialogIndex, $dialogTemplates, addMessage, clearInputFiles, editInputFiles, setMessageText } from '../../../store/store';
import s from './messageInput.module.scss';
import AttachIcon from '../../../assets/attach.svg';
import AttachedFile from '../attachFile/attachedFile';

export default function SendInput(){
    const dialogTemplates = useStore($dialogTemplates);
    const selectedIndex = useStore($currentDialogIndex);

    function sendMessage() {
        if (dialogTemplates[selectedIndex].messageText.length > 0 || dialogTemplates[selectedIndex].attachments.length > 0) {
            var dateWithouthSecond = new Date();
            const newMessage = {
                dialogId: selectedIndex,
                message: {
                    text: dialogTemplates[selectedIndex].messageText,
                    sendTime: dateWithouthSecond.toLocaleTimeString(navigator.language, { hour12: false, hour: '2-digit', minute: '2-digit' }),
                    sender: "Вы",
                    attachments: dialogTemplates[selectedIndex].attachments
                }
            }
            addMessage(newMessage)
            setMessageText({ text: '', dialogId: selectedIndex });
            clearInputFiles(selectedIndex);
        }
    }

    function onFiles(e: any) {
        if(dialogTemplates[selectedIndex].attachments.length < 9)
        editInputFiles({ attach: e.target.files[0].name, remove: false, removeIndex: undefined, dialogId: selectedIndex });
    }

    function removeFile(index: number) {
        editInputFiles({ attach: undefined, remove: true, removeIndex: index, dialogId: selectedIndex });
    }

    return(
        <div className={s.sendInput}>
                <div className={s.messageText}>
                    <textarea value={dialogTemplates[selectedIndex].messageText}
                        onChange={e => setMessageText({ text: e.target.value, dialogId: selectedIndex })} />
                    <input type={'file'} name='file' id='file' className={s.inputFile} onChange={e => onFiles(e)} />
                    <label className={s.attachFile} htmlFor='file'>
                        <img src={AttachIcon} />
                    </label>
                    {dialogTemplates[selectedIndex].attachments.length > 0 ?
                        <div className={s.attachments}>
                            <span>Вложения</span>
                            <div className={s.attachmentsList}>
                                {dialogTemplates[selectedIndex].attachments.map((item, index) => <AttachedFile fileName={item} addMode={true} index={index} onClick={removeFile} />)}
                            </div>
                        </div>
                        : null}
                </div>
                <button className={s.sendBtn}
                    onClick={() => sendMessage()}>
                    <img src="https://icons-for-free.com/download-icon-content+send+icon-1320087227200139227_512.png" />
                </button>
            </div>
    )
}