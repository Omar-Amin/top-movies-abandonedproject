import React from "react"
import base from "../auth/base"
import "./Home.css"
import TopMoviesList from "../components/TopMoviesList"
import SearchBar from "../components/SearchBar"

class Home extends React.Component {
    constructor() {
        super()
        this.database = base.database()

        this.state = {
            userID: base.auth().currentUser.uid,
            currentData: new Map()
        }

        this.retrieveData = this.retrieveData.bind(this)
    }


    componentWillMount() {
        // fetch from firebase
        base.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ userID: user.uid })
                this.retrieveData()
            }
        })
    }

    //TODO: Cannot add duplicates (in searchbar.js), and delete from database when deleted (in topmoviesList)
    retrieveData() {
        const { userID, currentData } = this.state
        var root = this.database.ref()
        var moviesRef = root.child(`${userID}/movies`)
        moviesRef.once('value', function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                var childData = childSnapshot.val();
                currentData.set(childData.id, childData)
            });
        }).then(() => {
            this.setState({ currentData: currentData })
        });

    }

    render() {
        const { currentData } = this.state
        return (
            <div className="outer-container">
                <div className="container">
                    <h1 className="title">Your top movies</h1>
                    <div className="search-bar">
                        <SearchBar currentData={currentData} />
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