import SearchView from './SearchView'
import { connect } from 'react-redux'
import { searchShows } from './searchAction'
import searchReducer from './searchReducer'

const mapStateToProps = state => {
    return {
        searchResults: state.search || {},     
    }
}

const mapDispatchToProps = dispatch => {
    return {
        searchShows:(searchResults) => {dispatch(searchShows(searchResults))},
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchView)
export { searchReducer }