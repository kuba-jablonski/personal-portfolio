import Vuex from 'vuex'
import pincloneThumbnail from '~/assets/images/pinclone.jpg'
import pincloneMain from '~/assets/images/pinclone2.png'
// import pincloneImgLg from '~/assets/images/pinclone-h.png'
// import pomodoroImg from '~/assets/images/pomodoro.jpg'
// import pomodoroImgLg from '~/assets/images/pomodoro-h.png'
// import votingImg from '~/assets/images/voting.jpg'
// import votingImgLg from '~/assets/images/voting-h.png'
// import hanoiImg from '~/assets/images/hanoi.jpg'
// import hanoiImgLg from '~/assets/images/hanoi-h.png'
// import bookImg from '~/assets/images/books.jpg'
// import bookImgLg from '~/assets/images/books-h.png'
// import portfolioImg from '~/assets/images/portfolio.jpg'
// import portfolioImgLg from '~/assets/images/portfolio-h.png'

const createStore = () => {
  return new Vuex.Store({
    state: {
      projects: [
        {
          name: 'Pinclone',
          id: 'pinclone',
          images: {
            thumbnail: pincloneThumbnail,
            main: pincloneMain
          },
          description: 'A Vue projects this is. Yes, it is. It is amazing and beautiful. This is placeholder text.'
        }
      ]
    },
    mutations: {
      increment (state) {
        state.counter++
      }
    },
    getters: {
      projectById: state => id => state.projects.find(project => project.id === id)
    }
  })
}

export default createStore
