import { useState } from "react";

function ModeTogglerHooks() {
    const [darkModeFlag, setDarkModeFlag] = useState(false);
    const darkMode = <p>Dark mode is on</p>;
    const LightMode = <p>Light mode is on</p>;
    const Toggler = () => {
        return darkModeFlag ? darkMode: LightMode;
    }
    function clickHandler() {
        setDarkModeFlag(!darkModeFlag)
    }
    return (
        <div>
            <Toggler></Toggler>
            <button onClick={clickHandler}>Change Mode</button>
        </div>
    );
}

export default ModeTogglerHooks;