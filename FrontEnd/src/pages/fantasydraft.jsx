import React from 'react';
import LineUp from "../components/lineupHeader";
import PlayersPanel from "../components/playersPanel";
import LineupPanel from "../components/lineuppanel";
import "./fantasydraft.css"
import Players from "../components/players";
/**
 * 
 use effect to calla  load function
 load function to get data from service
 */


function FantasyDraft() {



  return (
    <div>
        <LineUp /> 
        <section className="fantasy-body">
                    <div className="between-components">
                        <h1>Available Players</h1>
                        <div className="lineup-txt">
                                <h1>Your Lineup</h1>
                                <p className="bottom">swap players until (date time goes here)</p>
                            </div>
                            <div className="salary-txt">
                                <div className="remaining-salary">
                                    <h1>$(salary)</h1>
                                    <p className="bottom">salary remaining</p>
                                </div>
                                <div className="player-avg">
                                    <h1>$(salary)</h1>
                                    <p className="bottom">avg/player</p>
                                </div>
                            </div>
                    </div>
            <section className="left-side">
                    <PlayersPanel />
                    <Players />
            </section>
                    <section className="right-side">
                        <LineupPanel />
                        <LineupPanel />
                    </section>
        </section>
        </div>
  );
}

export default FantasyDraft;
