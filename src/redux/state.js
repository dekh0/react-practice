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
      { id: 1, post: 'ЛЯГУШЕЬ ' },
      { id: 2, post: 'ПРИВЕТ' },
      { id: 3, post: 'покушал' },
      { id: 4, post: 'хочу кушать' },
      { id: 5, post: 'МОй первый пост: ква' }
    ]
  }
}

export let addPost = (postMessage) => {
  let post = {id:6, post: 'скушай кузнечика!'}
  state.posts.postsData.push(post);
}


export default state;
