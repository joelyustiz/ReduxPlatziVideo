function data(state, action) {
    switch (action.type) {
        case 'SEARCH_VIDEO': {
             //action.payload.query
           //const list = state.data.categories[2].playlist
           // const results = list.filter((item)=>{
            //     return item.author.includes(action.payload.query)
            // })
            let results = []
            if (action.payload.query) {
                state.data.categories.map((item)=>{
                    return  item.playlist.filter((item)=>{
                                return item.author.toLowerCase().includes(action.payload.query.toLowerCase()) && results.push(item) 
                    })
                })
            }
            
            return {
                ...state,
                search: results,
            }
        }
            
            break;
    
        default:
        return state
            break;
    }
}
export default data;