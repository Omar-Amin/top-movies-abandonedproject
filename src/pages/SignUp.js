import React, { useCallback } from "react";
import { withRouter, Redirect } from "react-router";
import base from "../auth/base";

const SignUp = ({ history }) => {

    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            await base
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value);
            // to redirect us to the "Homepage"
            history.push("/");
        } catch (error) {
            alert(error);
        }
    }, [history]);

    const goToLogIn = () => {
        history.push("/login")
        return <Redirect to="/login" />
    }

    return (
        <div>
            Sign up
      <form onSubmit={handleSignUp}>
                <label>
                    <input name="email" type="email" placeholder="Email" />
                </label>
                <label>
                    <input name="password" type="password" placeholder="Password" />
                </label>
                <button type="submit">Sign Up</button>
            </form>
            <button onClick={goToLogIn} >Go to log in</button>

        </div>
    );
};

export default withRouter(SignUp);