import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import Home from "./pages/Home"
import LogIn from "./pages/LogIn"
import SignUp from "./pages/SignUp"
import { AuthProvider } from "./auth/Auth"
import PrivateRoute from "./components/PrivateRoute"

const App = () => {
    return (
        <AuthProvider>
            <BrowserRouter>
                <div>
                    <PrivateRoute exact path="/" component={Home} />
                    <Route exact path="/login" component={LogIn} />
                    <Route exact path="/signup" component={SignUp} />
                </div>
            </BrowserRouter>
        </AuthProvider>
    )
}

export default App