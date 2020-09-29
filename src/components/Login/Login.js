import React, { useContext } from 'react';
import {UserContext} from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { initLoginFramework, handleGoogleSignIn } from './LoginManager';

const Login = () => {
    // Initialize firebase/login framework
    initLoginFramework();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    
    
    const googleSignIn = () => {
        handleGoogleSignIn()
        .then(res => {
            setLoggedInUser(res);
            history.replace(from)
        })
        
    }
    return (
        <div>
            <button onClick={googleSignIn}>Google Sign In</button>
        </div>
    );
};

export default Login;