function ModeToggler() {
    let isDarkModeOn = false;
    const darkMode = <p>Dark mode is on</p>;
    const LightMode = <p>Light mode is on</p>;
    const Toggler = () => {
        return isDarkModeOn ? darkMode: LightMode;
    }
    const clickHandler = () => {
        isDarkModeOn = !isDarkModeOn;
        if(isDarkModeOn){
            console.log('Dark mode is on');
        } else {
            console.log('Light mode is on');
        }
    }
    return (
        <div>
            <Toggler></Toggler>
            <button onClick={clickHandler}>Change Mode</button>
        </div>
    );
}

export default ModeToggler;