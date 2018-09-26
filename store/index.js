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
          name: 'Quit Smoking App',
          id: '1',
          images: {
            thumbnail: quitsmokingThumbnail,
            main: quitsmokingMain,
          },
          links: {
            code: 'https://github.com/kuba-jablonski/quit-smoking',
            website: 'https://jj-ss.surge.sh/'
          },
          description: 'A full-stack progressive web application inspired by a mobile app I used. It helps keep track of a person\'s progress in quitting smoking',
          tech: ['Vue', 'SCSS', 'PWA', 'Node', 'Express', 'MongoDB']
        },
        {
          name: 'Pinclone',
          id: '2',
          images: {
            thumbnail: pincloneThumbnail,
            main: pincloneMain,
          },
          links: {
            code: 'https://github.com/kuba-jablonski/pinterest-clone',
            website: 'https://jj-pinclone.surge.sh/'
          },
          description: 'A simple Pinterest-like on UI application that allows users to browse other users\' wall of images and to add, link, or delete images to their own Pinterest-style walls.',
          tech: ['Vue', 'SCSS', 'Firebase']
        },
        {
          name: 'Voting App',
          id: '3',
          images: {
            thumbnail: votingThumbnail, 
            main: votingMain,
          },
          links: {
            code: 'https://github.com/kuba-jablonski/fcc-voting-app--client--v2',
            website: 'https://jj-vote.surge.sh/'
          },
          description: 'A full stack project that allows users to browse existing polls as well as to sign up and login to vote or create new polls.',
          tech: ['Vue', 'Bulma', 'Node', 'Express', 'MongoDB']
        },
        {
          name: 'Book Trading App',
          id: '4',
          images: {
            thumbnail: booksThumbnail,
            main: booksMain,
          },
          links: {
            code: 'https://github.com/kuba-jablonski/book-trading--client',
            website: 'https://jj-book-trading.surge.sh/'
          },
          description: 'A full stack project that allows users to browse, post, and trade second hand books.',
          tech: ['Vue', 'Vuetify', 'Node', 'Express', 'MongoDB']
        },
        {
          name: 'Hanoi Solver',
          id: '5',
          images: {
            thumbnail: hanoiThumbnail,
            main: hanoiMain,
          },
          links: {
            code: 'https://github.com/kuba-jablonski/web_dev_tier1/tree/master/hanoi',
            website: 'http://jjhanoi-01.surge.sh/'
          },
          description: 'A recursive algorithm for solving the Towers of Hanoi puzzle, with a colorful animated interface. You can also try solving it yourself!',
          tech: ['JavaScript', 'SCSS']
        },
        {
          name: 'Pomodoro Timer',
          id: '6',
          images: {
            thumbnail: pomodoroThumbnail,
            main: pomodoroMain,
          },
          links: {
            code: 'https://github.com/kuba-jablonski/pomodoro-pwa',
            website: 'https://jj-pomodoro.surge.sh/'
          },
          description: 'Offline first productivity timer based on the well known "Pomodoro Technique".',
          tech: ['Vue', 'SCSS', 'PWA']
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
