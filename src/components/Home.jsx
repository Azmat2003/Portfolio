import '../styles/home.css';
import calm from "../assets/subject.png";
import crazy from "../assets/subject2.png";


const Home = () => {
  return (
    <div className="home-container" id="home">
      {/* LEFT SIDE: Quote */}
      <div className="quote-section">
        <h1 className="quote-text">“First, solve the problem. Then, write the code.”</h1>
        <p className="author">– Azzu Bhai</p>
      </div>

      {/* RIGHT SIDE: Floating Character */}
      <div className="character-section">
        <div className="image-wrapper">
          {/* Ensure these images are in your public folder */}
          <img src={calm} alt="Calm Dev" className="char-img calm" />
          <img src={crazy} alt="Crazy Dev" className="char-img crazy" />
        </div>
      </div>
    </div>
  );
};

export default Home;