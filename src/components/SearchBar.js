import React from "react"
import apiKey from "../auth/apiKey"
import "../styling/SearchBar.css"

class SearchBar extends React.Component {
    constructor() {
        super()

        this.state = {
            currentSearchValue: "",
            finished: true
        }

        this.searchForMovies = this.searchForMovies.bind(this)
    }

    componentWillMount() {
        /*         fetch("https://api.themoviedb.org/3/search/company?api_key=" + apiKey + "&query=star&page=1")
                    .then(res => res.json())
                    .then((res) => console.log(res)) */
    }

    searchForMovies(e) {
        const { finished } = this.state

        // in order we dont spam the server for each character
        // we request when 0,5s has passed
        if (finished) {
            this.setState({ finished: false })
            setTimeout(function () {
                // searching the TMDB should be here
                fetch("https://api.themoviedb.org/3/search/movie?api_key=" + apiKey + "&language=en-US&query=" + this.state.currentSearchValue + "&page=1")
                    .then(res => res.json())
                    .then((res) => console.log(res))

                this.setState({ finished: true })
            }.bind(this), 500)
        }

        this.setState({
            currentSearchValue: e.target.value,
        })
    }

    // when typing search the query and add the object to an li
    // then add a style to the list
    // change the style of the scrollbar
    render() {
        return (
            <div className="search-container">
                <form className="form-style">
                    <input
                        type="text"
                        placeholder="Search for a movie..."
                        name="searchbar"
                        className="search-bar-style"
                        onChange={this.searchForMovies}>
                    </input>
                    <div className="search-list" style={{ visibility: this.state.currentSearchValue !== "" ? "visible" : "hidden" }}>
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