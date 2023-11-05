import "../components/fantasyfootballcard";
import "./lobby.css";
import ContestCard from "../components/contestcard";
import WelcomeHeader from "../components/welcome-header";
import { useEffect, useState } from "react";
import contestService from "../services/contestService";



function Lobby() {
  const [contestList, setContestList] = useState([]);
  const [leagueFilter, setLeagueFilter] = useState("ALL");
  


  function loadData() {
    const data = contestService.getContestList();
    setContestList(data);

    console.log(data)
  }

  useEffect(()=> {
    loadData();
  }, [])

  return (
  <body className="Lobby">
          <section className="lobby-slider">
          <WelcomeHeader />
          <div
            id="carouselExampleAutoplaying"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="https://via.placeholder.com/800x400"
                  class="d-block w-100"
                  alt="..."
                ></img>
              </div>
              <div class="carousel-item">
                <img
                  src="https://via.placeholder.com/800x400"
                  class="d-block w-100"
                  alt="..."
                ></img>
              </div>
              <div class="carousel-item">
                <img
                  src="https://via.placeholder.com/800x400"
                  class="d-block w-100"
                  alt="..."
                ></img>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="prev"
            >
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="next"
            >
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
          <h1 className='lobbytxt'>Contest for you</h1>
          <section>
                {contestList.filter(x => leagueFilter == "ALL" || x.league == leagueFilter).map(item => 
                <ContestCard data={item} />)}
          </section>
  </body>
  );
}

export default Lobby;

