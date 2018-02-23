import { fromJS } from 'immutable'
 
const initialState = fromJS({
        visibility: false,
        mediaId: null
})

function modal(state = initialState, action) {
    switch (action.type) {
        case 'OPEN_MODAL':
            return state
            break;
        case 'CLOSE_MODAL':
            return state
            break;
        default:
            return state
            break;
    }
}

export default modal;