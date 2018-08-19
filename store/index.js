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
          description: 'A simple Pinterest-like app make with Vue and Firebase. My first attempt at creating a fully custom CSS solution without relying on any frameworks.'
        },
        {
          name: 'Voting App',
          id: '2',
          images: {
            thumbnail: votingThumbnail,
            main: votingMain
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
          description: 'Vue SPA connected to a Node server. Data stored in MongoDB. Styled with the Vuetify framework.'
        },
        {
          name: 'Pomodoro Timer',
          id: '4',
          images: {
            thumbnail: pomodoroThumbnail,
            main: pomodoroMain
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
          description: 'A Vue project and a Node/Mongo APi. Offline capabilities with background sync.'
        },
        {
          name: 'Quit Smoking App',
          id: '6',
          images: {
            thumbnail: quitsmokingThumbnail,
            main: quitsmokingMain
          },
          description: 'A Vue project and a Node/Mongo APi. Offline capabilities with background sync.'
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
