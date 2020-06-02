import React  from 'react'
import { Link } from 'react-router-dom'
// import './SelectionButtonView.css'

const SelectionButtonView = ({episode, link}) => {
    return(
            <Link key={episode.id} to={link + episode.id}><button className="episodeButton"><div className="buttonText">{episode.name}</div></button></Link>         
    )
}

export default SelectionButtonView
