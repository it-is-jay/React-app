import './Sidebar.css';

function Side(props) {
    const styles = {
        color: "tomato",
        fontSize: "40px"
    };
    return (
        <div className="side-bar-style">
            <h3 style={styles}>{props.salutation}</h3>
            <p>This is side bar</p>
        </ div>
    );
}

export default Side;