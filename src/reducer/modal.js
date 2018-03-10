import { fromJS } from 'immutable'
import { OPEN_MODAL, CLOSE_MODAL} from '../actions-type/index'

const initialState = fromJS({
        visibility: false,
        mediaId: null
})

function modal(state = initialState, action) {
    switch (action.type) {
        case OPEN_MODAL:
            return state.merge({
                        visibility:true,
                        mediaId: action.payload.mediaId,
                    })
            break;
        case CLOSE_MODAL:
            return state.set('visibility', false)
            break;
        default:
            return state
            break;
    }
}

export default modal;