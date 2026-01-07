import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-title">Galaxy S24 Ultra</h1>
          <h2 className="home-subtitle">შექმენით სრულყოფილობა</h2>
          <p className="home-description">
            უძლიერესი ჩიპი. 5G სიჩქარე. მოწინავე კამერის სისტემა. 
            Gorilla Glass Armor, რომელიც უფრო გამძლეა, ვიდრე ნებისმიერი სმარტფონის მინა. 
            და ნათელი, ლამაზი AMOLED ეკრანი. Galaxy S24 Ultra-ს აქვს ყველაფერი — 
            ორ შესანიშნავ ზომაში.
          </p>
          <p className="home-price">
            დაწყებული $29.99/თვეში 24 თვის განმავლობაში ან $799 ტრეიდ-ინამდე*
          </p>
          <button className="home-button" onClick={() => navigate('/users')}>
            შეიძინე
          </button>
        </div>
        <div className="home-image-container">
          <div className="phone-stack">
            <div className="phone phone-top">
              <div className="phone-screen">
                <div className="phone-wallpaper"></div>
              </div>
            </div>
            <div className="phone phone-bottom">
              <div className="phone-side"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

