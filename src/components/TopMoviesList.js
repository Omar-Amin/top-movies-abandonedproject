import React from "react"

class TopMoviesList extends React.Component {
    constructor() {
        super()

        this.state = {
            topMovies: [],
            holder: []
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const { topMovies } = this.props
        if (prevState.topMovies !== topMovies) {
            this.setState({ topMovies: topMovies })
        }
    }

    render() {
        const { topMovies } = this.state

        return (
            <div>
                {topMovies.map(item => {
                    return <div>{item.id}</div>
                })}
            </div>
        )
    }
}

export default TopMoviesList