import React from "react"
import base from "../auth/base"

class Home extends React.Component {
    constructor() {
        super()

        this.state = {
        }
    }

    render() {
        return (
            <div>
                Home
                <button onClick={() => base.auth().signOut()}>Sign out</button>
            </div>
        )
    }
}

export default Home