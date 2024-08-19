import { useContext } from "react";

import { LoginContextHelper } from "./helper/LoginContextHelper";

function Profile() {
    const {userName, setShowProfile} = useContext(LoginContextHelper);
    return (
        <div>
            <p>Profile logged in: {userName}</p>
            <p>The user name is taken from context which is set in the login component</p>
            {/* The below button will reset the profile boolean to false */}
            <button onClick={()=>{
                setShowProfile(false);
            }}>Go Back</button> 
        </div>
    )
}

export default Profile;