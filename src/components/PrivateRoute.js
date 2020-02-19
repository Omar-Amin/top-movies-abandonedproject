import React, { useContext } from "react"
import { Route, Redirect } from "react-router-dom"
import { AuthContext } from "../auth/Auth"

// whether or not to stay at home or go to log in
// "check if the user is authenticated"
const PrivateRoute = ({ component: HomeComponent, ...rest }) => {
    const { currentUser } = useContext(AuthContext) //check if user is logged in
    return (
        <Route
            {...rest}
            render={routeProps =>
                currentUser ? (
                    <HomeComponent {...routeProps} />
                ) : (<Redirect to={"/login"} />)}
        />
    )
}

export default PrivateRoute