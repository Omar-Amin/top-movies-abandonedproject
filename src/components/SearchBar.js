import React from "react"
import apiKey from "../auth/apiKey"
import genres from "../data/genres"
import "../styling/SearchBar.css"
import SearchListItem from "./SearchListItem"
import base from "../auth/base"
import firebase from "firebase"

class SearchBar extends React.Component {

    constructor() {
        super()

        this.database = base.database()

        this.state = {
            currentSearchValue: "",
            finished: true,
            searchData: [{ id: -1, poster: "", rating: 0.0, title: "", release_date: "", genres: "" }],
            listOfResults: [],
            userID: base.auth().currentUser.uid,
            currentData: new Map()
        }


        this.searchForMovies = this.searchForMovies.bind(this)
        this.addToDatabase = this.addToDatabase.bind(this)
    }

    componentWillMount() {

    }

    addToDatabase(id, poster, rating, title, release_date, genres) {
        if (this.state.currentData.get(id) === undefined) {
            const { userID } = this.state
            const postData = {
                id: id,
                poster: poster,
                rating: rating,
                title: title,
                release_date: release_date,
                genres: genres,
                ranking: 0
            }

            var root = this.database.ref()
            var moviesRef = root.child(`${userID}/movies`)
            var newRef = moviesRef.push()
            newRef.set(postData)
        }

    }

    componentDidUpdate(prevProps, prevState) {
        const { listOfResults } = this.state
        // basically transforsm the data to searchData
        if (prevState.listOfResults !== listOfResults && listOfResults !== undefined) {
            var data = []

            listOfResults.map(movie => {
                var genreList = []
                movie.genre_ids.map(id => {
                    genreList.push(genres.find(x => x.id === id).name)
                })

                const obj = {
                    id: movie.id, poster: "https://image.tmdb.org/t/p/w600_and_h900_bestv2" + movie.poster_path,
                    rating: movie.vote_average, title: movie.title, release_date: movie.release_date, genres: genreList.join(', ')
                }
                data.push(obj)
            })

            this.setState({ searchData: data })
        }
        if (prevState.currentData !== this.props.currentData) {
            const { currentData } = this.props
            this.setState({ currentData: currentData })
        }
    }

    searchForMovies(e) {
        const { finished } = this.state
        // in order we dont spam the server for each character
        // we request when 0,5s has passed
        if (finished && e.target.value !== "") {
            this.setState({ finished: false })
            setTimeout(function () {
                // searching the TMDB should be here
                fetch("https://api.themoviedb.org/3/search/movie?api_key=" + apiKey + "&language=en-US&query=" + this.state.currentSearchValue + "&page=1")
                    .then(res => res.json())
                    .then((res) => {
                        this.setState({ listOfResults: res.results })
                    })
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
        const { currentSearchValue, searchData } = this.state
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
                    <div className="search-list" style={{ visibility: currentSearchValue !== "" ? "visible" : "hidden" }}>
                        {searchData.map(item => <SearchListItem id={item.id}
                            poster={item.poster}
                            rating={item.rating}
                            title={item.title}
                            release_date={item.release_date}
                            genres={item.genres}
                            key={item.id}
                            addToDatabase={this.addToDatabase} />)}
                    </div>
                </form>

            </div>
        )
    }
}

export default SearchBar