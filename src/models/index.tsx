export interface IMessageModel{
    text: string,
    sendTime: string,
    sender: string,
    attachments: string[]
}

export interface IOwnerModel{
    name: string,
    logo: string,
    online: boolean
}

export interface IDialogModel{
    id: number
    user: IOwnerModel,
    messages: IMessageModel[]
}

export class MessageModel implements IMessageModel {
    text: string
    sendTime: string
    sender: string
    attachments: string[]
}

export class OwnerModel implements IOwnerModel {
    name: string
    logo: string
    online: boolean
}

export class DialogModel implements IDialogModel {
    id: number
    user: IOwnerModel
    messages: IMessageModel[]
}