import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo, faKeyboard } from "@fortawesome/free-solid-svg-icons";
import Header from "../UI/Header/Header";
import shortid from "shortid";
import "./HomePage.scss";
import teamsLayout from "./microsoftteamslayout.jpg";

const HomePage = () => {
  const history = useHistory();

  const startCall = () => {
    const uid = shortid.generate();
    history.push(`/${uid}#init`);
  };
  return (
    <div className="home-page">
      <Header />
      <div className="body">
        <div className="left-side">
          <div className="content">
            <h2>Virtual conferences and webinars redefined.</h2>
            <p>
              With interactive meetings, hassle-free sharing, data friendly
              features all in a easy-to-use layout, we aim to redefine the
              online conferencing experience to cater to all your needs.
            </p>
            <div className="action-btn">
              <button className="btn blue" onClick={startCall}>
                <FontAwesomeIcon className="icon-block" icon={faVideo} />
                New Meeting
              </button>
              <div className="input-block">
                <div className="input-section">
                  <FontAwesomeIcon className="icon-block" icon={faKeyboard} />
                  <input placeholder="Enter Meeting Link" />
                </div>
                <button className="btn no-bg">Join</button>
              </div>
            </div>
            <div className="help-text">
              <a href="">Learn More</a>
            </div>
          </div>
        </div>
        <div className="right-side">
          <div className="content">
            <img src={teamsLayout} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
