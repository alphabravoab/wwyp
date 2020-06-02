import { http_get } from '../../services/httpClient'

export const SEARCH_SHOW = 'SEARCH_SHOW'

const searching = (searchResults) => ({
    type: SEARCH_SHOW,
    payload: searchResults
})

export const searchShows = (searchTerm) => dispatch => {
    const endpoint = `search/shows?q=${searchTerm}`
    http_get(endpoint)
        .then(suc => dispatch(searching(suc.data)))
}
