import Vuex from 'vuex'
import pincloneThumbnail from '~/assets/images/pinclone-thumbnail.png'
import pincloneMain from '~/assets/images/pinclone-main.png'
import votingThumbnail from '~/assets/images/voting-thumbnail.png'
import votingMain from '~/assets/images/voting-main.png'
import booksThumbnail from '~/assets/images/books-thumbnail.png'
import booksMain from '~/assets/images/books-main.png'
import pomodoroThumbnail from '~/assets/images/pomodoro-thumbnail.png'
import pomodoroMain from '~/assets/images/pomodoro-main.png'
import quitsmokingThumbnail from '~/assets/images/quitsmoking-thumbnail.png'
import quitsmokingMain from '~/assets/images/quitsmoking-main.png'
import hanoiThumbnail from '~/assets/images/hanoi-thumbnail.png'
import hanoiMain from '~/assets/images/hanoi-main.png'


const createStore = () => {
  return new Vuex.Store({
    state: {
      projects: [
        {
          name: 'Pinclone',
          id: '1',
          images: {
            thumbnail: pincloneThumbnail,
            main: pincloneMain
          },
          links: {
            code: 'https://github.com/kuba-jablonski/pinterest-clone',
            website: 'https://jj-pinclone.surge.sh/'
          },
          description: 'A simple Pinterest-like application, which allows users to log in and post their favourite pictures. Part of freeCodeCamp fullstack curriculum. Built with Vue, Express and MongoDB.'
        },
        {
          name: 'Voting App',
          id: '2',
          images: {
            thumbnail: votingThumbnail,
            main: votingMain
          },
          links: {
            code: 'https://github.com/kuba-jablonski/fcc-voting-app--client--v2',
            website: 'https://jj-vote.surge.sh/'
          },
          description: 'My first Vue app AND my first Node/Mongo API. Huge milestone in my learning journey, but I do write much better code these days :)'
        },
        {
          name: 'Book Trading App',
          id: '3',
          images: {
            thumbnail: booksThumbnail,
            main: booksMain
          },
          links: {
            code: 'https://github.com/kuba-jablonski/book-trading--client',
            website: 'https://jj-book-trading.surge.sh/'
          },
          description: 'Vue SPA connected to a Node server. Data stored in MongoDB. Styled with the Vuetify framework.'
        },
        {
          name: 'Pomodoro Timer',
          id: '4',
          images: {
            thumbnail: pomodoroThumbnail,
            main: pomodoroMain
          },
          links: {
            code: 'https://github.com/kuba-jablonski/pomodoro-pwa',
            website: 'https://jj-pomodoro.surge.sh/'
          },
          description: 'Offline first Vue.js Progressive Web App.'
        },
        {
          name: 'Quit Smoking App',
          id: '5',
          images: {
            thumbnail: quitsmokingThumbnail,
            main: quitsmokingMain
          },
          links: {
            code: 'https://github.com/kuba-jablonski/quit-smoking',
            website: 'https://jj-ss.surge.sh/'
          },
          description: 'A Vue project and a Node/Mongo APi. Offline capabilities with background sync.'
        },
        {
          name: 'Hanoi Solver',
          id: '6',
          images: {
            thumbnail: hanoiThumbnail,
            main: hanoiMain
          },
          links: {
            code: 'https://github.com/kuba-jablonski/web_dev_tier1/tree/master/hanoi',
            website: 'http://jjhanoi-01.surge.sh/'
          },
          description: 'One of my oldest projects. A recursive hanoi tower game solver that you can also play yourself :)'
        }
      ]
    },
    getters: {
      projectById: state => id => state.projects.find(project => project.id === id),
      projectIndexById: state => id => state.projects.findIndex(project => project.id === id)
    }
  })
}

export default createStore
