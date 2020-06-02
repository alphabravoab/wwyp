import React from 'react'
import { useForm } from 'react-hook-form'
import SelectionButton from '../SelectionButton'
// import './searchView.css'

const SearchView = ({searchResults, searchShows}) => {
    const { register, handleSubmit } = useForm()

    const onSubmit = (data) => {
        // replace spaces with %20 for shows with space in their name.
        const searchTerm = data.showName.replace(/ /g,"%20")
        searchShows(searchTerm)
    }

    return(
        <div>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <input name="showName" ref={register} />
                <button type="submit">Search</button>
            </form>
            <div>
                {searchResults && searchResults.map(episode=> <SelectionButton key={episode.id} episode={episode.show} link={"/series/"} />)}
            </div>
        </div>
    )
}

export default SearchView
