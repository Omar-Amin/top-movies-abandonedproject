import React, { useCallback } from "react";
import { withRouter } from "react-router";
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
        </div>
    );
};

export default withRouter(SignUp);