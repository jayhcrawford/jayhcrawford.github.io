function Button(props) {

    const styles = {
        backgroundColor: "black",
        color: "white",
        borderRadius: "10px",
        padding: "1rem",
        cursor: "pointer",
        display: "block",
        width: "93%",
        margin: "5px",
    }

    return (
    <div style={styles}>
            <div className="div-text">
                <span className="persName">{props.name}</span>
                <span className="stateName">{props.location}</span>
            </div>
    </div>);
}

export default Button