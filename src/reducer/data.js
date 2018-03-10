import schema from '../schemas/index'
import { fromJS } from 'immutable'
import { SEARCH_ENTITIES } from '../actions-type/index'

const initialState = fromJS({
            // ...data
            entities: schema.entities,
            categories: schema.result.categories,
            search:'', 
})

function data(state = initialState, action) {
    switch (action.type) {
        case SEARCH_ENTITIES: {
             //action.payload.query
           //const list = state.data.categories[2].playlist
           // const results = list.filter((item)=>{
            //     return item.author.includes(action.payload.query)
            // })
           /*  let results = []
            if (action.payload.query) {
                state.data.categories.map((item)=>{
                    return  item.playlist.filter((item)=>{
                                return item.author.toLowerCase().includes(action.payload.query.toLowerCase()) && results.push(item) 
                    })
                })
            } */
            
            return state.set('search', action.payload.query)
        }
            break;
    
        default:
            return state
            break;
    }
}
export default data;