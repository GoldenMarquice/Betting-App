import React, { useState } from "react";
import './fantasyfootballcard.css';
import LineUp from "./lineupHeader";
import contestService from "../services/contestService";
import { Link } from 'react-router-dom';


const FantasyFootballModal = (props) => {
    const draftInfo = contestService[props.data.league];
    const [draftVisible, setdraftVisible] = useState(false);

  const showDraft = () => {
    setdraftVisible(true);
    console.log("card clicked", props.data)
  }

    const close = () => {
        props.onClose();
    }

    return (
  
    <div id="fancybox-wrap" className="fancybox-ie modal" style={{display:'block '}}>{draftVisible ? <LineUp data={props.data} /> : null}
        <div className="fancy-overlay"></div>
        <div id="fancybox-outer">
            <div id="fancybox-content">
                <div id="h2h-modal">
                    <div class="modal-container h2h-container loading-block public-h2h" data-h2h-modal="1">
                        <div class="modal-header">
                            <div data-public-hvle-header="1" class="hide public-hvle-header-container">
                                <h3> {props.data?.contestTitle} " Vs."<span data-public-hvle-username="1"></span></h3>
                                <div class="alert alert-warning hide">
                                    <span class="icon-important"></span>
                                    <p>Select a Lineup to Enter This Contest</p>
                                </div>
                                <div class="alert alert-success hide">
                                    <span class="icon-check"></span>
                                    <p>Your Contest Entry has been confirmed!</p>
                                </div>
                            </div>
                                <div data-default-header="1">
                                    <div class="pull-left contest-info">
                                        <div class="contest-logo">
                                            {/* <img src="/_assets/images/icons/contest-types/h2h.png" alt="Madden Stream $3 Head to Head"></img> */}
                                        </div>
                                        <h2 title="Madden Stream $3 Head to Head">{props.data.name}</h2>
                                        <div class="tile-container">
                                            <div class="tile">
                                                <span class="tile-label">Entry:</span>
                                                <span>$3</span>
                                                <br></br>
                                                <span class="tile-label">Available:</span>
                                                <span>4</span>
                                            </div>
                                            <div class="tile tile-border">
                                                <span class="tile-label">Prizes:</span>
                                                <span>${props.data.prize}</span>
                                                <br></br>
                                                <span class="tile-label">FPPs:</span>
                                                <span>3</span>
                                            </div>
                                            <div class="tile">
                                                <span class="tile-label">My Entries:</span>
                                                <span data-total-entries="0">0</span>
                                                <br></br>
                                                <span class="tile-label">Multi-Entry:</span>
                                                <span>Unlimited</span>
                                            </div>
                                        </div>
                                    </div>
                            <div class="pull-left contest-timer">
                                <div class="countdown">
                                    <label>Live In:</label>
                                    {/* <p class="timer" data-modal-timer="1" data-start="countdown">{updateCountdown}</p> */}
                                    <p class="full-date">11/1 8:00 AM EST</p>
                                    <button onClick={close} className="btn btn-sm btn-danger">Close</button>
                                </div>
                            </div>
                            <div class="pull-left balance-container">
                                <span class="tile-label">Balance:</span>
                                <span data-user-balance="0">
                                    $0.00
                                </span>
                            </div>
                            <ul class="nav nav-tabs">
                                <li class="hide">
                                    <a href="#" data-toggle="tab" data-show="hvle">Enter Lineups</a>
                                </li>
                                <li class="active">
                                    <a href="/pages/lobby" data-toggle="tab" data-show="details">Details &amp; Opponents</a>
                                </li>
                                    <li><a href="/pages/lobby" data-toggle="tab" data-show="rules-and-scoring">Rules &amp; Scoring</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="modal-body">
                        <div class="alert alert-danger hide">
                            <span class="icon-error"></span>
                            <p data-error-message="1"></p>
                        </div>
            
                            <div class="rules-and-scoring-container rules-and-scoring-wrap light-theme hide">
                                <div id="dkjs-rules-and-scoring-container" class="raptor head-to-head"><div class="ContestDetailsPopRulesContainer_rules-and-scoring-tab"><div class="RulesNotification_rules-notification"></div><div class="rule-container"><div><p></p><h2>NFL Classic</h2><p>In salary cap contests, participants will create a lineup by selecting players listed in the Player Pool.</p><p>Contest results will be determined by the total points accumulated by each individual lineup entry (scoring rules summarized below).</p><p>Participation in each contest must be made only as specified in the Terms of Use. Failure to comply with these Terms of Use will result in disqualification and, if applicable, prize forfeiture.</p><p></p><h3>Scoring</h3><div class="double-table"><table class="left-table"><thead><tr><td colspan="2" role="columnheader"><p><strong>Offense</strong></p></td></tr></thead><tbody><tr><td><p>Passing TD</p></td><td><p>+4 Pts</p></td></tr><tr><td><p>25 Passing Yards</p></td><td><p>+1 Pt (+0.04 Pts/ Yards)</p></td></tr><tr><td><p>300+ Yard Passing Game</p></td><td><p>+3 Pts</p></td></tr><tr><td><p>Interception</p></td><td><p>-1 Pt</p></td></tr><tr><td><p>Rushing TD</p></td><td><p>+6 Pts</p></td></tr><tr><td><p>10 Rushing Yards</p></td><td><p>+1 Pt (+0.1 Pts/Yard)</p></td></tr><tr><td><p>100+ Yard Rushing Game</p></td><td><p>+3 Pts</p></td></tr><tr><td><p>Receiving TD</p></td><td><p>+6 Pts</p></td></tr><tr><td><p>10 Receiving Yards</p></td><td><p>+1 Pt (+0.1 Pts/Yard)</p></td></tr><tr><td><p>100+ Receiving Yard Game</p></td><td><p>+3 Pts</p></td></tr><tr><td><p>Reception</p></td><td><p>+1 Pt</p></td></tr><tr><td><p>Punt/Kickoff/FG Return for TD</p></td><td><p>+6 Pts</p></td></tr><tr><td><p>Fumble Lost</p></td><td><p>-1 Pt</p></td></tr><tr><td><p>2 Pt Conversion (Pass, Run, or Catch)</p></td><td><p>+2 Pts</p></td></tr><tr><td><p>Offensive Fumble Recovery TD</p></td><td><p>+6 Pts</p></td></tr></tbody></table><p></p><table class="right-table"><thead><tr><td colspan="2" role="columnheader"><p><strong>Defense</strong></p></td></tr></thead><tbody><tr><td><p>Sack</p></td><td><p>+1 Pt</p></td></tr><tr><td><p>Interception</p></td><td><p>+2 Pts</p></td></tr><tr><td><p>Fumble Recovery</p></td><td><p>+2 Pts</p></td></tr><tr><td><p>Punt/Kickoff/FG Return for TD</p></td><td><p>+6 Pts</p></td></tr><tr><td><p>Interception Return TD</p></td><td><p>+6 Pts</p></td></tr><tr><td><p>Fumble Recovery TD</p></td><td><p>+6 Pts</p></td></tr><tr><td><p>Blocked Punt or FG Return TD</p></td><td><p>+6 Pts</p></td></tr><tr><td><p>Safety</p></td><td><p>+2 Pts</p></td></tr><tr><td><p>Blocked Kick</p></td><td><p>+2 Pts</p></td></tr><tr><td><p>2 Pt Conversion/Extra Point Return</p></td><td><p>+2 Pts</p></td></tr><tr><td><p>0 Points Allowed</p></td><td><p>+10 Pts</p></td></tr><tr><td><p>1 – 6 Points Allowed</p></td><td><p>+7 Pts</p></td></tr><tr><td><p>7 – 13 Points Allowed</p></td><td><p>+4 Pts</p></td></tr><tr><td><p>14 – 20 Points Allowed</p></td><td><p>+1 Pt</p></td></tr><tr><td><p>21 – 27 Points Allowed</p></td><td><p>+0 Pts</p></td></tr><tr><td><p>28 – 34 Points Allowed</p></td><td><p>-1 Pt</p></td></tr><tr><td><p>35+ Points Allowed</p></td><td><p>-4 Pts</p></td></tr></tbody></table><div class="clear"></div></div><h3>Scoring Notes</h3><ul><li>Points Allowed (PA) only includes points surrendered while DST is on the field - doesn't include points given up by team's offense (e.g. points off offensive turnovers).</li><li>The following scoring plays will result in Points Allowed by your Defense/Special Teams:<ul><li>Rushing TDs, Passing TDs, Offensive Fumble Recovery TDs, Punt Return TDs, Kick Return TDs, FG Return TDs, Blocked FG TDs, Blocked Punt TDs</li><li>2pt conversions</li><li>2 Point Conversion/Extra-point Returns</li><li>Extra-points</li><li>Field-goals</li></ul></li><li>A fumble recovery will be awarded to a Defense/Special Teams if the team's offense recovers a fumble by the opposing defense (e.g. after an offensive turnover).</li></ul><p></p><h3>Lineup Requirements</h3><p>Lineups will consist of 9 players and must include players from at least 2 different NFL games. The 9 Roster positions are:</p><table class="standalone-table"><tbody><tr><td><p>1</p></td><td><p>QB</p></td></tr><tr><td><p>2</p></td><td><p>RB</p></td></tr><tr><td><p>3</p></td><td><p>WR</p></td></tr><tr><td><p>1</p></td><td><p>TE</p></td></tr><tr><td><p>1</p></td><td><p>FLEX</p><p>(RB/WR/TE)</p></td></tr><tr><td><p>1</p></td><td><p>DST</p></td></tr></tbody></table><p></p><p></p><h3>Player Pool</h3><p>The Player Pool will consist of all NFL players expected to be on the active roster for any team scheduled to play in the contest Game Set. Occasionally a player may be missing from the Player Pool due to trades or other unforeseen circumstances. Each player listed in the player pool has an assigned salary and a valid lineup must not exceed the salary cap of $50,000.</p><p>Due to the fluid nature of rosters, in the event a team adjusts their roster after player pools are finalized, DraftKings reserves the right to adjust player pools after contests for that Game Set have become available. In these instances, additional players may be added to the Player Pool up until 48 hours before a Game Set’s lock. This may result in valid lineups becoming invalid. Any participants who have entered contests for the Game Set prior to the adjustment will be notified via email.</p><p>A "Game Set" is a set of games used for contests; each contest is tied to one Game Set. Contests tied to the same Game Set can be created at different times. Therefore, game policies are based on the timing of a Game Set being made available, not each individual contest.</p><p></p><h3>Position Eligibility</h3><p>Player positions are determined at the sole discretion of DraftKings.</p><p></p><h3>Lineup Edits</h3><p>Lineups may be edited at any time leading up to games. Each individual player will become "locked" at the scheduled start time of their team’s game. A locked player cannot be added or removed from a roster spot. Locked roster spots for all entries are displayed in contest GameCenters.</p><p>If the scheduled start time for a game changes after contests for a Game Set containing that game become available, DraftKings will take measures to ensure the change is reflected on Draft Screens and for lineup editing purposes. In the rare case that a game starts before the scheduled start time, all players within that game will become locked as soon as our feed reflects that the game has begun. Additionally, any swaps that were made after the real-life start time of the game will result in those lineups being disqualified and refunded.</p><p></p><h3>Cancelled, Postponed, and Rescheduled Games</h3><p>In the event that a game is cancelled or postponed &amp; rescheduled to a time within the original Scoring Period and this change is made less than 24 hours before a Game Set’s start, the game will be included in the Game Set and players listed to play in that game will be eligible to accrue points.</p><p>If a game is rescheduled for a time OUTSIDE the original Scoring Period and this change is made less than 24 hours before a Game Set’s start, the game will be disabled from the Game Set and players listed to play in that game will NOT be eligible to accrue point. Players who you selected for your roster as of the time of the lock of the disabled game will remain in your roster and will accrue zero points. Players in disabled games will become locked at the originally scheduled start time of their game.</p><p>The Scoring Period for NFL is defined as the timeframe between the scheduled start of the first game within the Game Set and 11:59pm ET on the first Wednesday after the last scheduled game within the Game Set. In the event that a game is cancelled or postponed &amp; rescheduled to any time (both outside &amp; within the original Scoring Period) and this change is made MORE than 24 hours before a Game Set’s start, it is at the sole discretion of Draftkings to include or remove the game from that given Game Set.</p><p>In the event a game is postponed, Draftkings will make a decision no later than 11:59pm ET of the day of the game on how to handle the postponed game.</p><p>DraftKings may choose to adjust the Scoring Period for a Game Set at their sole discretion to accommodate schedule changes to any time before 12:00am ET on the day after the Game Set is scheduled.</p><p>Any games that are disabled will be indicated as such on Draft Screens. Emails and other notifications may also be used to notify users of disabled games.</p><p>If canceled or rescheduled games result in a Game Set including only one active game and this is known before the contest start time then all contests for that Game Set will be canceled and refunded.</p><p>If a Game Set includes only one active game but this was not known until after the contest start time then contests for this Game Set will not be canceled.</p><p>Games are "known" to be canceled or postponed once their status is updated as such by DraftKings’ NFL stats-provider, STATS LLC.</p><p>Example: If a Game Set includes two games at 8pm ET and 10:30pm ET respectively, and the 10:30pm ET game is officially postponed at 6pm ET then all contests for that Game Set are canceled and refunded. If the 10:30pm ET game was not officially postponed until after 8pm ET then contests for that Game Set are not canceled and are played out using only the one active game.</p><p>If canceled or rescheduled games result in a Game Set including zero active games, all contests for that Game Set will be canceled and refunded.</p><p></p><h3>Suspended or Shortened Games</h3><p>DraftKings uses official NFL statistics and only includes statistics from games NFL deems to be official. If the NFL declares a game "suspended" then the statistics generated before the game is suspended will count in Game Sets containing said game. Any statistics generated on a later date when the game resumes will not be included.</p><p></p><h2>Simulated NFL Classic</h2><p></p><h3>Game Settings</h3><ul><li>Difficulty: All-Madden</li><li>Game Style: Arcade</li><li>Event Type: Exhibition</li><li>Even Teams: Off</li><li>Quarter Length: 8 minutes</li><li>Accelerated Clock: On</li><li>Play Clock: 20 seconds</li><li>Depth Charts found <a href="https://dknation.draftkings.com/playbook/21436368/draftkings-madden-stream-depth-charts-for-all-teams">here.</a></li></ul><p></p><p>Note:</p><p>In contests that are streamed where commentators are incorporated, the commentators are not in the same room as the game system device, and do not access to the game controllers. The actions of game operations or commentators cannot alter the outcome of the simulation.</p><p></p><h3>Stream Links</h3><p>Games are available for viewing in Game Center under the submitted lineup. Additional streams can be found inside the <a href="https://www.draftkings.com/dk-live-app">DK Live app</a>, in <a href="https://www.draftkings.com/playbook/nfl">Playbook Showdown articles</a>, at <a href="https://dknation.draftkings.com/2020/2/10/21132058/video?_ga=2.139697782.491107722.1592250198-43951637.1580856655">DK Nation</a>, and on <a  href="https://www.youtube.com/channel/UCMJAKnrVv1sRzlq_vqige3Q">YouTube.</a></p><p></p><h3>Game &amp; Stream Malfunction Policy</h3><p>In the event of a game malfunction, all Game Sets with the affected match up will be cancelled and refunded. A game malfunction is defined as any malfunction that prohibits the game from finishing. There are rare instances in which there may be a malfunction of the DraftKings stream, but the game itself remains unaffected. In these cases, the streams will be completed offline. Gamecenters will update at the end of each quarter in these scenarios. DraftKings will publish the box scores of these contests, and all scores will be considered final after confirmation of all scoring plays and turnovers by our operations team.</p></div></div></div></div>
                            </div>
                        <div class="details-container active">
                            <div class="left-section">
                                <section class="summary-container">
                                    <h3>Summary</h3>
                                    <div class="summary-description shadows-light level2">
                                        <p><strong>Play for $2 to Win ${props.data.prize}</strong> in a 2 player Head-to-Head contest.</p>
                                        <div class="contest-type-description">
                                                <p>Draft a lineup to add an entry or choose an available opponent to play. Entries that haven't been joined will be auto-matched prior to the start time.</p>
                                        </div>
                                    </div>
                                </section>
                                <section class="other-container">
                                    <h4>Other Ways to Play</h4>
                                    <div class="other-description shadows-light level2">
                                        <ul>
                                            <li>
                                                <a class="link-icon" href="/directchallenge?sport=NFL&draftGroupId=94474&entryFee=3" data-h2h-action="createMultiple">
                                                    <span class="icon-create-contest"></span>
                                                    <span>Create Multiple H2H Contests</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a class="link-icon" href="/directchallenge?sport=NFL&amp;draftGroupId=94474&amp;entryFee=3" data-h2h-action="friends">
                                                    <span class="icon-friend-check"></span>
                                                    <span>Play Against Friends</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </section>
                            </div>
                            <div class="right-section active">
                                <section className="opponents-container">
                                    <h4>Available Opponents</h4>
                                    {/* <div class="input-group">
                                        <input type="search" data-h2h-opponent-search="1" class="form-control search" placeholder="Search" aria-label="Search"></input>
                                        <div class="input-group-btn" data-search-icon="1">
                                            <button class="btn" type="submit" aria-label="Search Button"><span class="icon-search"></span></button>
                                            
                                        
                                        </div>
                                    </div> */}
                                    <div class="opponents-list shadows-light level2">
                                        <ul>
                                            <li>
                                                <span title="Crod"><span class="icon-experienced-user-5" title="Experience Badge"></span>Naruto</span>
                                                <a href="/contest/draftteam/153072223">Play</a>
                                            </li>
                                            <li>
                                                <span title="Crod"><span class="icon-experienced-user-5" title="Experience Badge"></span>Goku</span>
                                                <a href="/contest/draftteam/153072223">Play</a>
                                            </li>
                                            <li>
                                                <span title="Crod"><span class="icon-experienced-user-5" title="Experience Badge"></span>Deku</span>
                                                <a href="/contest/draftteam/153072223">Play</a>
                                            </li>
                                        </ul>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <div class="hide" data-select-opponents-toggle="1">
                            <a href="#" data-hvle-opponents-toggle="1" class="dk-btn dk-btn-success">Select Another Opponent</a>
                        </div>
                        <div data-toggle-draft-new="1" class="hide">
                            <div class="pull-left">
                                <div class="HEP-info">
                                    <span class="icon-experienced-user"></span>
                                    <span><a href="/experience-badges" target="_blank">Experience Badge</a></span>
                                </div>
                                <div class="AvgRes-info">
                                    <span class="icon-average-results"></span>
                                    <span><a href="/average-results" target="_blank">Average Results</a></span>
                                </div>
                            </div>
                            <div class="btn-container">
                                <span>Don't want to use an existing lineup?</span>
                                <a href="#" class="dk-btn dk-btn-success" data-contest-template-id="272773" data-draftgroup-id="94474" data-h2h-action="draft">
                                    <span>Draft New Lineup</span>
                                </a>
                            </div>
                        </div>
                        <div data-toggle-draft-now="1" class="">
                            <div class="pull-left">
                                <div class="HEP-info">
                                    <span class="icon-experienced-user"></span>
                                    <span><a href="/experience-badges" target="_blank">Experience Badge</a></span>
                                </div>
                                <div class="AvgRes-info">
                                    <span class="icon-average-results"></span>
                                    <span><a href="/average-results" target="_blank">Average Results</a></span>
                                </div>
                            </div>
                            <div class="btn-container">
                                <a href="#" class="sb-btn sb-btn-success" data-contest-template-id="272773" data-draftgroup-id="94474" data-h2h-action="draft">
                                <Link to={`/pages/fantasydraft/${props.data.id}`}><button onClick={showDraft}><span>Draft Now</span></button></Link>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    );

}

export default FantasyFootballModal;
