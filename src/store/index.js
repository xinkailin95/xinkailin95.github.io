import { createStore } from 'vuex';

export default createStore({
  state: {
    photoList: [
      { id: 1, url: '2022-09-14_3.jpeg', alt: '' },
      { id: 2, url: '2022-09-14_1.jpeg', alt: 'No shit allow!!' },
      { id: 3, url: '2022-09-02.jpeg', alt: '' },
      { id: 3, url: '2022-09-02_1.jpeg', alt: '' },
    ],
    gameList: [
      {
        id: 1,
        title: 'Geek Fantasy',
        link: 'https://xli2288.wixsite.com/geekfantasy',
        url: 'GeekFantasy.png',
        alt: 'Landing Page',
      },
    ],
    isPlay: true,
    imgSrc: '',
    imgAlt: '',
  },
  getters: {},
  mutations: {
    setPlay(state, payload) {
      state.isPlay = payload;
    },
    setImgUrl(state, payload) {
      state.imgSrc = payload;
    },
    setImgAlt(state, payload) {
      state.imgAlt = payload;
    },
  },
  actions: {},
  modules: {},
});
