import React, { useEffect, useState } from 'react';
import "./players.css"
import contestService from '../services/contestService';

function Players({ selectPlayer }) {
    const [allPlayers, setAllPlayers] = useState([]);

    const loadPlayers = async () => {
        const playersResponse = await contestService.getPlayers();
        setAllPlayers(playersResponse);
    };

    useEffect(() => {
        loadPlayers();
    }, []); 

    return (
        <section className="player-card">
            
            {allPlayers.map(player =>
                <div className="player-slot">
                        <div className="player-slot-left">
                            <div className="player-img">
                                <img src={player.image} alt=""></img>
                            </div>
                            <div className="position">
                                <p>{player.position}</p>
                            </div>
                            <div className="player-name">
                            <strong><p>{player.name}</p></strong>
                        </div>
                    </div>
                    <div className="player-slot-right">
                        <div className="game">
                            <p>(MIA @ <strong>KC</strong>)</p>
                        </div>
                        <div className="played">
                            <p>(0)</p>
                        </div>
                        <div className="op-rank">
                            <p>(23rd)</p>
                        </div>
                        <div className="player-salary">
                            <p>($5000)</p>
                        </div>
                        <div className="add-player-btn">
                            <button onClick={() => selectPlayer(player)}>
                            <svg fill="currentColor" version="1.1" id="add-circle" x="0" y="0" viewBox="0 0 17 17" xmlspace="preserve" width="27" height="27" style={{verticalAlign: "middle",
                                flex: "0 0 auto", 
                                overflow: "visible",}}>
                                    <g id="add-circle_1_"><path d="M8.5 0a8.5 8.5 0 10.001 17.001A8.5 8.5 0 008.5 0zm0 16C4.365 16 1 12.635 1 8.5S4.365 1 8.5 1 16 4.365 16 8.5 12.635 16 8.5 16z"></path><path d="M12.5 8H9V4.5a.5.5 0 00-1 0V8H4.5a.5.5 0 000 1H8v3.5a.5.5 0 001 0V9h3.5a.5.5 0 000-1z"></path></g></svg>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>


    );
}

export default Players;