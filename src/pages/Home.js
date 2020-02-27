import React from "react"
import base from "../auth/base"
import "./Home.css"
import TopMoviesList from "../components/TopMoviesList"

class Home extends React.Component {
    constructor() {
        super()

        this.state = {
        }
    }

    //Search should add movies?
    render() {
        return (
            <div className="container">
                <h1 className="title">Your top movies</h1>
                <div className="search-bar">[implement search]</div>
                <div className="top-movies-list">
                    <TopMoviesList></TopMoviesList>
                </div>
                <button className="sign-out-button" onClick={() => base.auth().signOut()}>Sign out</button>
            </div>
        )
    }
}

export default Home