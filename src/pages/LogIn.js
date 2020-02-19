import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import base from "../auth/base.js";
import { AuthContext } from "../auth/Auth.js";

const LogIn = ({ history }) => {
    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            try {
                await base
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);
                history.push("/");
            } catch (error) {
                alert(error);
            }
        },
        [history]
    );

    const { currentUser } = useContext(AuthContext);

    // if user is not null, then it is authenticated
    if (currentUser) {
        return <Redirect to="/" />;
    }

    return (
        <div>
            Log in
      <form onSubmit={handleLogin}>
                <label>
                    <input name="email" type="email" placeholder="Email" />
                </label>
                <label>
                    <input name="password" type="password" placeholder="Password" />
                </label>
                <button type="submit">Log in</button>
            </form>
        </div>
    );
};

export default withRouter(LogIn);