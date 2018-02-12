import React from 'react'
import { render } from 'react-dom'
// import Playlist from './src/playlist/components/playlist'
import data from '../api.json'
import Home from '../pages/containers/home'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

const initialState = {
    data:{
        ...data
    }
}
const app = document.getElementById('home-container')

const store = createStore(
    (state) => state,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


console.log(store.getState())

render( 
    <Provider store={store}>
        < Home />
    </Provider>
     , app);
