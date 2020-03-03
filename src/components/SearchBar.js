import React from "react"
import apiKey from "../auth/apiKey"

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

    render() {
        return (
            <div>
                ayy
            </div>
        )
    }
}

export default SearchBar