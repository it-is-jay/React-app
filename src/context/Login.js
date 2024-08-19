import { useContext } from "react";

import { LoginContextHelper } from "./helper/LoginContextHelper";

function Login() {
    const {setUserName, setShowProfile} = useContext(LoginContextHelper);
    return (
        <div>
            <label>UserName:</label>
            <input onChange={(event)=>{
                setUserName(event.target.value);
            }}></input>
            
            <br></br>
            <button onClick={()=>{
                setShowProfile(true);
            }}>Login</button>
        </div>
    )
}

export default Login;