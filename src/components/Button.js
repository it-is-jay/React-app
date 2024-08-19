function Button() {
    const clickHandler = () =>{
        console.log('button is clicked');
    }
    return (
        <div>
            <button onClick={clickHandler}>Like</button>
        </ div>
    );
}



export default Button;