import React from 'react';
import "./playersPanel.css"

function PlayersPanel(){

    return (
        <section className="panel">
            <div className="panel-options">
                <ul class="nav nav-underline">
                    <div className="block">
                        <li class="nav-link active">
                        <span> Full List</span>
                        <p> All available players </p>
                        </li>
                    </div>
                    <div className="block">
                        <li class="nav-link">
                        <span> Guru Suggestions</span>
                        <p> Competitive draft-building tool</p>
                        </li>
                    </div>
                    <div className="block">
                        <li class="nav-link">
                        <span> Short List</span>
                        <p> Expert player insights</p>
                        </li>
                    </div>
                </ul>
            </div>
            <div className="pool-options">
                <div className="flex-options">
                    <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                        <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked></input>
                        <label class="btn btn-outline-primary" for="btnradio1">All</label>

                        <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off"></input>
                        <label class="btn btn-outline-primary" for="btnradio2">MVP -1.5X Points</label>

                        <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off"></input>
                        <label class="btn btn-outline-primary" for="btnradio3">AnyFlex</label>
                    </div>
                    <div className="dropdowns">
                        <div className="For">
                                    <p>Plays For</p>
                                    <button type="button" class="dropdown-toggle" aria-expanded="false">All Teams</button>
                        </div>
                        <div className="For">
                                    <p>Player Pool</p>
                                    <button type="button" class="dropdown-toggle" aria-expanded="false">All players</button>
                        </div>
                        <div className="For">
                                    <p>Stats For</p>
                                    <button type="button" class="dropdown-toggle" aria-expanded="false">Select</button>
                        </div>
                        </div>
                        <div className="search">
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="pick-bar">
                            <p id='name'>Name</p>
                            <div className="pick-bar-right">
                            <p id='game'>Game</p>
                            <p id='fppg'>FPPG</p>
                            <p id='played'>Played</p>
                            <p id='oprank'>Op Rank</p>
                            <p id='player-salary'>Salary</p>
                            </div>
                        </div>
        </section>
    );
}

export default PlayersPanel;