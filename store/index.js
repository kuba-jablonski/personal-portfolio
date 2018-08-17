import Vuex from 'vuex'
import pincloneThumbnail from '~/assets/images/pinclone-thumbnail.png'
import pincloneMain from '~/assets/images/pinclone-main.png'
import votingThumbnail from '~/assets/images/voting-thumbnail.png'
import votingMain from '~/assets/images/voting-main.png'
import booksThumbnail from '~/assets/images/books-thumbnail.png'
import booksMain from '~/assets/images/books-main.png'


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
        },
        {
          name: 'Voting App',
          id: 'voting',
          images: {
            thumbnail: votingThumbnail,
            main: votingMain
          },
          description: 'A Vue projects this is. Yes, it is. It is amazing and beautiful. This is placeholder text.'
        },
        {
          name: 'Book Trading App',
          id: 'books',
          images: {
            thumbnail: booksThumbnail,
            main: booksMain
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
