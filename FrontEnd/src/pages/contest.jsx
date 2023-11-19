import "./lobby.css";
import "./contest.css";
import ContestCard from "../components/contestcard";
import WelcomeHeader from "../components/welcome-header";
// import "../components/fantasyfootballcard";
import { useEffect, useState } from "react";
import contestService from "../services/contestService";
// import FantasyFootballModal from "../components/fantasyfootballcard";


function Contest() {
  const [contestList, setContestList] = useState([]);
  const [leagueFilter, setLeagueFilter] = useState("ALL");
  const [prizeFilter, setPrizeFilter] = useState(150000);


  function loadData() {
    const data = contestService.getContestList();
    setContestList(data);

    console.log(data)
  }

  useEffect(()=> {
    loadData();
  }, [])

  return (
    <body className="Contest">
        <WelcomeHeader />
    <section className="lobby-slider">
            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="/6k-monsterball.jpg" class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                        <img src="/4k-mlb.jpg" class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                        <img src="/contest-banner.jpg" class="d-block w-100" alt="..."></img>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </section>
        <section className="league-buttons">
            <div class="btn-group btn-group-lg" role="group" aria-label="Large button group">
                <button type="button" class="btn btn-outline-primary" onClick={() => setLeagueFilter("ALL")}>Discover</button>
                <button type="button" class="btn btn-outline-primary" onClick={() => setLeagueFilter("NFL")}>NFL</button>
                <button type="button" class="btn btn-outline-primary" onClick={() => setLeagueFilter("MLB")}>MLB</button>
                <button type="button" class="btn btn-outline-primary" onClick={() => setLeagueFilter("NBA")}>NBA</button>
                <button type="button" class="btn btn-outline-primary" onClick={() => setLeagueFilter("CFB")}>CFB</button>
                <button type="button" class="btn btn-outline-primary">EPL</button>
                <button type="button" class="btn btn-outline-primary">PGA</button>
                <button class="btn btn-outline-primary dropdown-toggle btn-lg" type="button" data-bs-toggle="dropdown" aria-expanded="false">More </button>
                <ul class="dropdown-menu">
                    <li>
                    <a class="dropdown-item" href="#">NHL</a>
                    </li>
                    <li>
                    <a class="dropdown-item" href="#">WNBA</a>
                    </li>
                    <li>
                    <a class="dropdown-item" href="#">NASCAR</a>
                    </li>
                </ul>
            </div>
        </section>
            <section className="Contest-Nav">
                <ul class="nav nav-underline">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Tournaments</a>
                        <p>High-paying contest with guaranteed prize pools</p>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Multipliers</a>
                        <p>Double your money or play for more</p>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Head to Heads</a>
                        <p>Compete against a single opponent, winner take all</p>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">3-100 Player</a>
                        <p>Compete against fewer players; multiple payout structures</p>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">50/50s</a>
                        <p>Finish in the top half to win</p>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Beginner Contest</a>
                        <p>New? Compete with players of the same experience level</p>
                    </li>
                </ul>
                {/* <FantasyFootballModal /> */}
            </section>
            <section className="contest-body">
        <section className="game-options">
                <div className="game-styles">
                    <h5>Game Styles</h5>
                    <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
                            <label class="form-check-label" for="flexRadioDefault1">
                                Full Roster
                            </label>
                            <p>Use strategy to fill each position while staying under the salary cap</p>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked></input>
                        <label class="form-check-label" for="flexRadioDefault2">
                            Single Game
                        </label>
                        <p>Pick any 5 players from one game while staying under the salary cap.</p>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked></input>
                        <label class="form-check-label" for="flexRadioDefault2">
                            Snake Draft
                        </label>
                        <p>Take turns picking players in a live draft.</p>
                    </div>
                </div>
                <div className="slates">
                    <h5>Slates</h5>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
                        <label class="form-check-label" for="flexRadioDefault1">
                            7:30pm ET
                        </label>
                        <p>Main</p>
                    </div>
                </div>
            <div className="entry-fee">
                <h5>Prize Winnings</h5>
                <div className="entry-fee-range">
                    <label for="customRange2" class="form-label">$0</label>
                    <label for="customRange2" class="form-label">$150,000</label>
                </div>
                    <input type="range" class="form-range" min="0" max="15000" value={prizeFilter} onChange={e => setPrizeFilter(e.target.value)} id="customRange2">
                    </input>
            </div>
            <div className="entry-type">
                <h5>Entry Type</h5>
                <br />
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
                    <label class="form-check-label" for="flexRadioDefault1">
                    All
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked></input>
                    <label class="form-check-label" for="flexRadioDefault2">
                        Single Entry
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked></input>
                    <label class="form-check-label" for="flexRadioDefault2">
                        Satellites & Qualifiers
                    </label>
                </div>
            </div>
            <div className="show-me-contest">
                <h5>Show me contests for...</h5>
                <br />
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
                    <label class="form-check-label" for="flexRadioDefault1">
                        All Players
                    </label>
                    <p>Contest open to players of all skill levels</p>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked></input>
                    <label class="form-check-label" for="flexRadioDefault2">
                        Beginner Only
                    </label>
                    <p>Contest open to beginners only</p>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked></input>
                    <label class="form-check-label" for="flexRadioDefault2">
                        Experienced players excluded
                    </label>
                    <p>Contests open to beginner and intermediate levels - no experienced players</p>
                </div>
            </div>
            </section>
            <section className="contest-slot">
            {contestList.filter(x => (leagueFilter == "ALL" || x.league == leagueFilter) && x.prize <= prizeFilter).map(item => 
                 <ContestCard data={item} />
            )}
            </section>
            
            </section>

    </body>
    );
}

export default Contest;