import React from 'react'
import { render } from 'react-dom'
// import Playlist from './src/playlist/components/playlist'
import data from '../api.json'
import Home from '../pages/containers/home'
import {createStore} from 'redux'

const initialState = {
    data:{
        ...data
    }
}

const store = createStore(
    (state) => state,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
const app = document.getElementById('home-container')

console.log(store.getState())

render( < Home data={data}/> , app);
