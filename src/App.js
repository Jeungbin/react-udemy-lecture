import ProfileCard from "./ProfileCard";
import "bulma/css/bulma.css";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";
function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Primary hero</p>
        </div>
      </section>

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-3">
              <ProfileCard title="A" handle="A1" image={AlexaImage} />
            </div>
            <div className="column is-3">
              <ProfileCard title="B" handle="B2" image={CortanaImage} />
            </div>
            <div className="column is-3">
              <ProfileCard title="C" handle="C3" image={SiriImage} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
