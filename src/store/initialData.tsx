import { DialogModel } from "../models";

export const Dialogs: DialogModel[] = [
    {
        user: {
            name: "Леонид Абрамов",
            logo: "https://pickaface.net/gallery/avatar/klancaster577452311623266f9.png",
            online: true
        },
        messages: [
            {
                text: "Товарищи! консультация с широким активом позволяет выполнять важные задания по разработке систем массового участия.",
                sendTime: "18:35",
                sender: "Леонид Абрамов",
                attachments: ['Photo.jpg', 'One.bmp']
            },
            {
                text: "С другой стороны укрепление и развитие структуры обеспечивает участие в формировании систем массового участия.",
                sendTime: "18:37",
                sender: "Вы",
                attachments: []
            },
            {
                text: "Значимость этих проблем настолько очевидна, что консультация с широким активом играет важную роль в формировании новых предложений.",
                sendTime: "18:42",
                sender: "Леонид Абрамов",
                attachments: ['Cat.png']
            },
        ],
        id: 0
    },
    {
        user: {
            name: "Валерия Кулешова",
            logo: "https://pickaface.net/gallery/avatar/20140108_000323_2856_randomperson.png",
            online: false
        },
        messages: [
            {
                text: "Идейные соображения высшего порядка, а также дальнейшее развитие различных форм деятельности позволяет оценить значение новых предложений.",
                sendTime: "23:34",
                sender: "Валерия Кулешова",
                attachments: ['dog.jpg']
            }
        ],
        id: 1
    }
]