import { combine, createEvent, createStore } from "effector";
import { DialogModel, IDialogModel, IMessageModel } from "../models";
import { Dialogs } from "./initialData";

export interface INewMessage {
    dialogId: number
    message: IMessageModel
}

export interface IDialogTemplate {
    dialogId: number,
    messageText: string,
    attachments: string[]
}

interface IMessageTextEdit {
    text: string,
    dialogId: number
}

interface IAttach {
    attach: string | undefined,
    remove: boolean,
    removeIndex: number | undefined,
    dialogId: number
}

export const selectDialog = createEvent<number>();
export const addMessage = createEvent<INewMessage>();
export const setSearch = createEvent<string>();
export const clearMessages = createEvent<number>();
export const clearInputFiles = createEvent<number>();
export const editInputFiles = createEvent<IAttach>();
export const setMessageText = createEvent<IMessageTextEdit>();

export const $originalDialogs = createStore<IDialogModel[]>(Dialogs)
    .on(addMessage, (store, message) => {
        var storeCopy = [...store];
        storeCopy[message.dialogId].messages.push(message.message);
        return storeCopy;
    })
    .on(clearMessages, (state, dialogId) => {
        var stateCopy = [...state];
        stateCopy[dialogId].messages = [];
        return stateCopy;
    })

export const $searchValue = createStore<string>('')
    .on(setSearch, (state, value) => value);

export const $dialogsList = combine($originalDialogs, $searchValue, (dialogs, searchValue) => dialogs.filter(x => x.user.name.toLowerCase().includes(searchValue.toLowerCase())))

export const $currentDialogIndex = createStore<number>(0)
    .on(selectDialog, (store, indexOfDialog) => store = indexOfDialog);

export const $dialogTemplates = createStore<IDialogTemplate[]>([{ dialogId: 0, messageText: '', attachments: [] }])
    .on(selectDialog, (state, dialogId) => {
        if (state.find(x => x.dialogId === dialogId) === undefined)
            return [...state, { dialogId: dialogId, messageText: '', attachments: [] }]
    })
    .on(setMessageText, (state, messageEdit: IMessageTextEdit) => {
        var tempState = [...state];
        tempState[messageEdit.dialogId].messageText = messageEdit.text;
        return tempState;
    })
    .on(editInputFiles, (state, inputFiles: IAttach) => {
        var tempState: any = [...state];
        if (inputFiles.remove) {
            tempState[inputFiles.dialogId].attachments.splice(inputFiles.removeIndex, 1);
        }
        else {
            tempState[inputFiles.dialogId].attachments.push(inputFiles.attach);
        }
        return tempState;
    })
    .on(clearInputFiles, (state, dialogId) => {
        var tempState = [...state];
        tempState[dialogId].attachments = [];
        return tempState;
    })