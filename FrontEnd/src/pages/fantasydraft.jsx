
import LineUp from "../components/lineupHeader";
import PlayersPanel from "../components/playersPanel";
import LineupPanel from "../components/lineuppanel";
import "./fantasydraft.css"
import Players from "../components/players";
import React, { useState } from 'react';
import {useParams} from 'react-router-dom';
/**
 * 
 use effect to calla  load function
 load function to get data from service
 */


function FantasyDraft() {
    const [selectedPlayers, setSelectedPlayers] = useState([]);
    const {id} = useParams();

    const selectPlayer = (player) => {
      // Add the selected player to the lineup
      setSelectedPlayers((prevSelectedPlayers) => [...prevSelectedPlayers, player]);
    };

    const removePlayer = (playerToRemove) => {
        // Remove the selected player from the lineup
        setSelectedPlayers((prevSelectedPlayers) =>
            prevSelectedPlayers.filter((player) => player.id !== playerToRemove.id)
        );
    };

  return (
    <div>
        <LineUp id={id}/> 
        <section className="fantasy-body">
            <section className="left-side">
            <h1>Available Players</h1>
                    <PlayersPanel />
                    <div data-bs-spy="scroll" data-bs-target="#simple-list-example" data-bs-offset="0" data-bs-smooth-scroll="true" class="scrollspy-example" 
                    tabindex="0">
                        <div className="scrollable-players">
                    <Players selectPlayer={selectPlayer} />
                        </div>
                    </div>
            </section>
                    <section className="right-side">
                        <div className="lineup-txt">
                            <div className="line-up">
                                <h1>Your Lineup</h1>
                                <p className="bottom">swap players until (date time goes here)</p>
                            </div>
                        </div>
                        <LineupPanel selectedPlayers={selectedPlayers} removePlayer={removePlayer} />
                    </section>
        </section>
        </div>
  );
}

export default FantasyDraft;
