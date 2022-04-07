let rerender = () => { }

let state = {
  dialogs: {
    dialogsData: [
      { id: 1, dialog: 'Маруся' },
      { id: 2, dialog: 'Фрогер' },
      { id: 3, dialog: 'Виолетта' },
      { id: 4, dialog: 'Тигр' },
      { id: 5, dialog: 'Напукал' },
      { id: 5, dialog: 'Покушал' }
    ],
    messagesData: [
      { id: 1, dialog: 'Привет' },
      { id: 2, dialog: 'Чтоооо?' },
      { id: 3, dialog: 'Хахаха' },
      { id: 4, dialog: 'НЕТ' },
      { id: 5, dialog: 'и что?' },
      { id: 4, dialog: 'лол' },
      { id: 5, dialog: 'ну ты и лягушка' }
    ]
  },
  posts: {
    postsData: [

    ]
  }
}

export let observer = (observer) => {
  rerender = observer;
}

export let addPost = (postMessage) => {
  let post = { id: 6, post: postMessage }
  state.posts.postsData.push(post);
  rerender(state);
}


export default state;
