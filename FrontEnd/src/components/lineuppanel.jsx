import React from 'react';
import "./lineuppanel.css";


function LineupPanel({ selectedPlayers, removePlayer }) {
    const isPlayerSelected = (player) => {
        // Check if the player is already in the selected players list
        return selectedPlayers.some((selectedPlayer) => selectedPlayer.id === player.id);
    };

    const addPlayer = (player) => {
        if (!isPlayerSelected(player)) {
            // Add the player to the lineup if they are not already selected
            selectedPlayers.push(player);
        }
    };
    return (
        <section className="lineup-card">
            <div className="lineup-slot">
                <div className="empty-slot-txt">
                    <h2>Selected Players</h2>
                    <ul>
                        {selectedPlayers.map((player) => (
                            <li key={player.id}>
                                <img src={player.image} alt=""></img>
                                <div className="player-postion"> {player.position}</div> 
                                <div className="player-name">{player.name}</div>
                                <button onClick={() => removePlayer(player)}>
                                    <svg fill="currentColor" version="1.1" id="cross_circle" x="0" y="0" viewBox="-951 532 17 17" xmlspace="preserve" width="37" height="27" class="_jt _jz _ajn _uf" style={{verticalAlign: "middle", flex: "0 0 auto", fill: "currentcolor", overflow: "visible",}}>
                                    <g id="remove-circle">
                                        <path d="M-938.5 540h-8a.5.5 0 000 1h8a.5.5 0 000-1z"></path>
                                        <path d="M-942.5 532a8.5 8.5 0 10.001 17.001A8.5 8.5 0 00-942.5 532zm0 16c-4.135 0-7.5-3.365-7.5-7.5s3.365-7.5 7.5-7.5 7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5z"></path></g></svg>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default LineupPanel;