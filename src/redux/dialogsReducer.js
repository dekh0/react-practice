const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Лягунец'},
        {id: 2, name: 'Квакер'},
        {id: 3, name: 'Фрог'},
        {id: 4, name: 'Головастик'},
        {id: 5, name: 'Зеленый'},
        {id: 6, name: 'Лопер'}
    ],
    messages: [
        {id: 1, message: 'НЕЕЕЕЕТ'},
        {id: 2, message: 'опяяять?'},
        {id: 3, message: 'Блин((('},
        {id: 4, message: 'УЙДИ'},
        {id: 5, message: 'ээээ'}
    ],
    newMessageBody: ""
};

const dialogsReducer = (state = initialState, action) => {
   switch (action.type) {
       case UPDATE_NEW_MESSAGE_BODY:
           state.newMessageBody = action.body;
           return state;
       case SEND_MESSAGE:
           let body = state.newMessageBody;
           state.newMessageBody = '';
           state.messages.push({id: 6, message: body});
           return state;
       default:
           return state;
   }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer;