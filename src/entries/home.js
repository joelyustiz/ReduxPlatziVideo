import React from 'react'
import { render } from 'react-dom'
// import Playlist from './src/playlist/components/playlist'
//import data from '../api.json'
import Home from '../pages/containers/home'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from '../reducer/index'
import data from '../schemas/index'
import { Map as map }   from 'immutable'

//console.log(data)
// const initialState = {
//     data:{
//         // ...data
//         entities: data.entities,
//         categories: data.result.categories,
//         search:[],
//     },
//     modal:{
//         visibility: false,
//         mediaId: null
//     }

// }


const app = document.getElementById('home-container')

const store = createStore(
    reducer,
    map(),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// console.log(store.getState())

render( 
    <Provider store={store}>
        < Home />
    </Provider>
     , app);
