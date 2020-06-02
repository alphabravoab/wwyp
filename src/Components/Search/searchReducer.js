import { SEARCH_SHOW } from './searchAction'

const searchReducer = (state={}, {type, payload}) => {
    switch(type){
        case SEARCH_SHOW:
            return {
                state,
                payload
            }
        default:
            return state
    }
}

export default searchReducer
