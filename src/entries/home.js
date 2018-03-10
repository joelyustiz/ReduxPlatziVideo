import React from 'react'
import { render } from 'react-dom'
// import Playlist from './src/playlist/components/playlist'
//import data from '../api.json'
import Home from '../pages/containers/home'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from '../reducer/index'
import data from '../schemas/index'
import { Map as map }   from 'immutable'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
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

// function logger({getState, dispatch}) {
//     return (next) => {
//         return (action) => {
//             console.log('Vamos',action)
//             const value = next(action)
//             console.log('Nuevo Estado', getState().toJS())
//             return value
//         }
//     }
// }

const logger = ({getState, dispatch}) => next => action => {
    console.log('Vamos',action)
            const value = next(action)
            console.log('Nuevo Estado', getState().toJS())
            return value
}

const app = document.getElementById('home-container')

const store = createStore(
    reducer,
    map(),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    composeWithDevTools(
            applyMiddleware(logger, thunk)
        )
)

// console.log(store.getState())

render( 
    <Provider store={store}>
        < Home />
    </Provider>
     , app);
