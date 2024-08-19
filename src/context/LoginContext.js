import { useState } from "react";
import Login from "./Login";
import Profile from "./Profile";

import { LoginContextHelper } from "./helper/LoginContextHelper";

function LoginContext() {
    const [showProfile, setShowProfile] = useState(false);
    const [userName, setUserName] = useState('default user name');
    return (
        <LoginContextHelper.Provider value={{userName, setUserName, setShowProfile}}>
            <div>
                {showProfile ? <Profile/> : <Login/>}
            </div>
        </LoginContextHelper.Provider>
        
        
    )
}

export default LoginContext;