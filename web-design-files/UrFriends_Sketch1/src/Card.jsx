import profilePic from './assets/jay.jpg'

function Card() {
    return (
        <div className="card">
            <img alt="profile picture" src={profilePic} className="profilePic"></img>
            <h2 className="card-title">Jay Crawford</h2>
            <p className="card-text">I am a visual artist and web programmer who lives in Los Angeles</p>
        </div>
    );
}

export default Card