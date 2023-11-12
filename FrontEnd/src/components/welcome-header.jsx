import React from "react";
import "./welcome-header.css";

function WelcomeHeader() {
    
  return (

    <div className="Welcome-header">
        <div className="welcome-header-left">
            <svg
            fill="#2D5BFF"
            viewBox="0 0 512 512"
            width="29"
            height="29"
            id="user-indicator-player"
            >
            <path d="M123.587 171.034v27.382c0 90.743 52.967 177.993 132.416 177.993 79.221 0 132.412-87.25 132.412-177.993v-27.382c0-90.743-54.611-130.073-132.413-130.073-79.448 0-132.416 39.331-132.416 130.073zM512 512H0c0-77.526 84.463-137.185 153.304-143.776 27.683 27.098 62.826 43.495 102.698 43.495 39.794 0 74.916-16.406 102.603-43.504 68.858 6.55 153.396 66.228 153.396 143.785z"></path>
            </svg>

            <div className="welcome-message">
                <span
                    className="welcome-user"
                    data-test-id="data-chunk-value"
                    theme="[object Object]"
                >
                    Welcome user
                </span>
                <span
                    className="earn-rewards"
                    data-test-id="data-chunk-label"
                    theme="[object Object]"
                >
                    Start earning rewards
                </span>
            </div>
        </div>
            <div className="welcome-header-right">
                <div className="upcoming-section">
                    <span
                        className="upcoming-count"
                        data-test-id="data-chunk-value"
                        theme="[object Object]"
                    >
                        0
                    </span>{" "}
                    <br></br>
                    <span
                        className="upcoming"
                        data-test-id="data-chunk-label"
                        theme="[object Object]"
                    >
                        Upcoming
                    </span>
                </div>

                <div className="live-section">
                    <span
                        className="live-count"
                        data-test-id="data-chunk-value"
                        theme="[object Object]"
                    >
                        0
                    </span>{" "}
                    <br></br>
                    <span
                        className="live"
                        data-test-id="data-chunk-label"
                        theme="[object Object]"
                    >
                        Live
                    </span>
                </div>

                <div className="bal">
                    <span
                        className="get-cash"
                        data-test-id="data-chunk-value"
                        theme="[object Object]"
                    >
                        $0
                    </span>{" "}
                    <br></br>
                    <span
                        className="refer-friends"
                        data-test-id="data-chunk-label"
                        theme="[object Object]"
                    >
                        Balance
                    </span>
                </div>
                    <div className="button-section">
                        <a href="/pages/deposit"><button type="button" className="btn btn-success">
                            Add Funds
                        </button> </a>
                        <a href="/pages/Promotions"> <button type="button" className="btn btn-outline-primary">
                            View Promos
                        </button></a>
                    </div>
            </div>
    </div>
  );
}

export default WelcomeHeader;
