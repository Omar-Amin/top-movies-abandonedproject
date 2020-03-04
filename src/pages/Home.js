import React from "react"
import base from "../auth/base"
import "./Home.css"
import TopMoviesList from "../components/TopMoviesList"
import SearchBar from "../components/SearchBar"

class Home extends React.Component {
    constructor() {
        super()

        this.state = {
        }
    }

    componentWillMount() {
        // fetch from firebase
    }

    // search should add movies?
    render() {
        return (
            <div className="outer-container">
                <div className="container">
                    <h1 className="title">Your top movies</h1>
                    <div className="search-bar">
                        <SearchBar />
                    </div>
                    <div className="top-movies-list">
                        <TopMoviesList></TopMoviesList>
                    </div>
                    <button className="sign-out-button" onClick={() => base.auth().signOut()}>Sign out</button>
                </div>
            </div>

        )
    }
}

export default Home