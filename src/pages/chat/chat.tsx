import ChatsContainer from "../../components/chatsContainer/chatsContainer";
import DialogContainer from "../../components/dialogContainer/dialogContainer";
import Header from "../../components/header/header";
import s from './chat.module.scss';

export default function Chat() {
    return (
        <div className={s.chat}>
            <Header />
            <div className={s.container}>
                <div className={s.content}>
                    <div className={s.chatsContainer}>
                        <ChatsContainer />
                    </div>
                    <div className={s.dialogContainer}>
                        <DialogContainer />
                    </div>
                </div>
            </div>
        </div>
    )
}