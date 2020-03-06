import React from "react"

const SearchListItem = ({ id, poster, rating, title, release_date, genres }) => (
    <li>
        {title}, {rating}, {release_date}
    </li>
)

export default SearchListItem