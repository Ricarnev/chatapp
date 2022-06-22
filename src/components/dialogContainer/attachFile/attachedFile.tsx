import s from './attachedFile.module.scss';
import RemoveIcon from '../../../assets/remove.svg';

interface AttachFileProps{
    fileName: string,
    addMode: boolean,
    index: number,
    onClick(file: number | string): void
}

export default function AttachedFile({fileName, addMode, index, onClick}: AttachFileProps) {

    return (
        <button className={s.attachment} onClick={() => onClick(addMode? index : fileName)}>
            <div className={s.attachmentName}>
                {fileName}
            </div>
            {addMode? 
            <img className={s.removeIcon} src={RemoveIcon}/>
            : null}
        </button>
    )
}