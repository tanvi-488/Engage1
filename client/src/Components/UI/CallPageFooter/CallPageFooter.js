import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVideo,
  faMicrophone,
  faVideoSlash,
  faPhone,
  faAngleUp,
  faClosedCaptioning,
  faDesktop,
  faMicrophoneSlash,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { TelephoneXFill } from "react-bootstrap-icons";
import "./CallPageFooter.scss";

const CallPageFooter = ({
  isPresenting,
  stopScreenShare,
  screenShare,
  isAudio,
  isVideo,
  toggleVideo,
  toggleAudio,
  disconnectCall,
}) => {
  return (
    <div className="footer-item">
      <div className="center-item">
        {isPresenting ? (
          <div className="icon-block icon-red" onClick={stopScreenShare}>
            <FontAwesomeIcon className="icon" icon={faDesktop} />
          </div>
        ) : (
          <div className="icon-block" onClick={screenShare}>
            <FontAwesomeIcon className="icon" icon={faDesktop} />
          </div>
        )}
        <div
          className={`icon-block ${!isAudio ? "red-bg" : null}`}
          onClick={() => toggleAudio(!isAudio)}
        >
          <FontAwesomeIcon
            className="icon"
            icon={isAudio ? faMicrophone : faMicrophoneSlash}
          />
        </div>
        <div
          className={`icon-block ${!isVideo ? "red-bg" : null}`}
          onClick={() => toggleVideo(!isVideo)}
        >
          <FontAwesomeIcon
            className="icon"
            icon={isVideo ? faVideo : faVideoSlash}
          />
        </div>
        <div className="icon-block icon-red" onClick={disconnectCall}>
          <TelephoneXFill className="icon" />
        </div>
      </div>
    </div>
  );
};

export default CallPageFooter;
