function Image(props) {
    return (
        <div>
            <img src={props.src} alt={props.alt} />
        </div>
    );
}

export default Image;