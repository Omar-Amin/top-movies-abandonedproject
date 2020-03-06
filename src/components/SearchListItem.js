import React from "react"
import "../styling/SearchBar.css"

const SearchListItem = ({ id, poster, rating, title, release_date, genres }) => (
    <li className="search-list-item">
        <img src={poster} className="search-poster"></img>
        <div className="search-items">
            <div className="search-title">
                {title}
            </div>
            <div className="search-release">
                {release_date}
            </div>
            <div className="search-release">
                Rating: {rating}
            </div>
            <div className="search-release">
                Genre: {genres}
            </div>
        </div>
    </li>
)

export default SearchListItem