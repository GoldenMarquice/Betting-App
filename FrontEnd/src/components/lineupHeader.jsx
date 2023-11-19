import React, { useState, useEffect } from "react";
import ContestService from "../services/contestService";
import "./lineupHeader.css";



    const LineUp = (props) => {
        const [titleVisible, setTitleVisible] = useState(false);
        const [contest, setContest] = useState({});

        const showTitle = () => {
            setTitleVisible(true);
        };

        function loadData() {
            const data = ContestService.getContestList();
            const contest = data.filter(x => x.id ==props.id)[0];
            setContest(contest); // todo: select the correct one
        }
        
        useEffect(()=> {
            loadData();
        }, []);

    return (
    <body>
        <section className="lineup-header">
            <div className="upper-header">
                    <div className="league"></div>
                    <div className="lineup-title"> 
            <h2 className="title-contest">{contest.name}</h2></div>
                <div className="time">
                    <div className="time-left"> 2 days left
                        <div className="start-time">starts Sunday 9:30am ET</div>
                    </div>
                </div>
            </div>
            <div className="lower-header">
                <div className="tournament-block">
                    <p id="top">Tournament</p>
                    <p id="bottom">contest type</p>
                </div>
                <div className="entry-block">
                    <p id="top">$9</p>
                    <p id="bottom">Entry Fee</p>
                </div>
                <div className="prize-block">
                    <p id="top">${contest.prize}</p>
                    <p id="bottom">guaranteed in prizes</p>
                </div>
            </div>
        </section>
    </body>


        );
    }

    export default LineUp;