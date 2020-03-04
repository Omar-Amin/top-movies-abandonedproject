import React from "react"
import apiKey from "../auth/apiKey"
import "../styling/SearchBar.css"

class SearchBar extends React.Component {
    constructor() {
        super()

        this.state = {
        }
    }

    componentWillMount() {
        /*         fetch("https://api.themoviedb.org/3/search/company?api_key=" + apiKey + "&query=star&page=1")
                    .then(res => res.json())
                    .then((res) => console.log(res)) */
    }

    // when typing search the query and add the object to an li
    // then add a style to the list
    // change the style of the scrollbar
    render() {
        return (
            <div>
                <form className="form-style">
                    <input
                        type="text"
                        placeholder="Search for a movie..."
                        name="searchbar"
                        className="search-bar-style">
                    </input>
                    <div className="search-list">
                        <li>hej</li>
                        <li>hej</li>
                        <li>hej</li>
                    </div>
                </form>

            </div>
        )
    }
}

export default SearchBar