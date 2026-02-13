import profilePic from './assets/aaa.jpg';

function Card(){
    return(
        <div className = "card">
            <img src={profilePic} alt="profile picture" />
            <h2>Manish Thakur</h2>
            <p>Software Developer</p>
        </div>
    );
}

export default Card;