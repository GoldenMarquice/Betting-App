import React, { useState } from "react";
import "./contestcard.css";
import { LeaguesInfo } from "../constants/leagueInfo";
import FantasyFootballModal from "./fantasyfootballcard";

const ContestCard = (props) => {
  const leagueInfo = LeaguesInfo[props.data.league];
  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
    console.log("card clicked")
  }

  const closeModal = () => {
    setModalVisible(false);
  }
 
  return (
    <div
      className="contest-card-container"
      data-test-id="contest-card"
      role="button"
      tabIndex="0"
      style={{ cursor: "pointer" }}
    >

      {modalVisible ? <FantasyFootballModal data={props.data} onClose={closeModal} /> : null}

      <div>
        <div
          data-test-id="link-label"
          role="button"
          tabIndex="0"
          style={{ cursor: "pointer" }}
        >
          <div className="full-roster-button" style={{backgroundColor:leagueInfo.color}}>
            <svg
              fill="currentColor"
              version="1.1"
              id="NFL"
              x="0"
              y="0"
              viewBox="0 0 17 17"
              xmlSpace="preserve"
              width="17"
              height="17"
              style={{
                verticalAlign: "middle",
                flex: "0 0 auto",
                fill: "currentColor",
                overflow: "visible",
              }}
            >
              <title>{props.data.league}</title>
              <path
                id="football-us"
                d={leagueInfo.icon}
              ></path>
            </svg>
            <div className="roster-buttontxt">
              <span className="League">{props.data.league}</span>
              <span className="roster">
                FULL ROSTER
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        className="contest-cardtxt"
        data-test-id="contest-card-name"
      >
        <div
          className="contest-card-title"
          data-test-id="data-chunk-value"
        >
          <button
            className="contest-title-btn"
            role="button"
            tabIndex="0"
            style={{ cursor: "pointer" }}
            onClick={showModal}
          >
            <span data-test-id="contest-name-formatted-string">
            {props.data.name}
            </span>
          </button>
        </div>
        <span
          className="contest-title-time"
          data-test-id="data-chunk-label"
        >
          {props.data.date}
        </span>
      </div>
      <div
        className="contestcountbox"
        data-test-id="ContestEntryCount"
      >
        <div
          className="contestcount"
          data-test-id="data-chunk-value"
        >
          <div data-test-id="contest-entry-count-summary" className="_je">
            <span className="entries">1,494</span> of <span>22,222</span>
          </div>
        </div>
        <div
          className="contest-entry-status"
          data-test-id="data-chunk-label"
        >
          <div className="contest-status">
            <div
              className="contest-percentage"
              data-test-id="contest-entry-count-percentage"
            >
              6% full
            </div>
            <div className="progression" data-test-id="progress-bar">
              <div
                className="progbar"
                role="progressbar"
                aria-valuemin="0"
                aria-valuenow="1494"
                aria-valuemax="22222"
                color="blue"
      
                aria-label="progressbar"
              >
                <div
                  id="progress-bar"
                  className="progress-fill"
                  style={{ width: "10%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="prizetxtbox"
      >
        <span
          className="prizemoneytxt"
          data-test-id="data-chunk-value"

        >
          ${props.data.prize}
        </span>
        <span
          className="guaranteedtxt"
          data-test-id="data-chunk-label"
        >
          GUARANTEED IN PRIZES
        </span>
      </div>
      <div data-test-id="entry-container" className="entrybtncontainer">
        <a
          data-test-id="entry-fee-button"
          href="/games/94948/contests/94948-266100545/enter"
          className="entryfeebtn"
        >
          <div
            className="entrybtntxt"
          >
            <div
              className="_dj _aj _at _de _jj _l"
              data-test-id="data-chunk-value"
            >
              <span data-test-id="entry-fee-copy" className="_acc">
                $2 entry
              </span>
            </div>
            <div
              className="_dj _de _ah _at _df _gd _dh _di _ir _l"
              data-test-id="data-chunk-label"
            >
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ContestCard;
