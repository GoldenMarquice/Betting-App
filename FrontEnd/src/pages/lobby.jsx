import "./lobby.css";
import ContestCard from "../components/contestcard";

function Lobby() {
  return (
    <section className="lobby-slider">
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
      <section className="league-buttons">
        <button type="button" class="btn btn-outline-primary btn-lg">
          Discover
        </button>
        <button type="button" class="btn btn-outline-primary btn-lg">
          NFL
        </button>
        <button type="button" class="btn btn-outline-primary btn-lg">
          MLB
        </button>
        <button type="button" class="btn btn-outline-primary btn-lg">
          NBA
        </button>
        <button type="button" class="btn btn-outline-primary btn-lg">
          CFB
        </button>
        <button type="button" class="btn btn-outline-primary btn-lg">
          EPL
        </button>
        <button type="button" class="btn btn-outline-primary btn-lg">
          PGA
        </button>
        <div class="dropdown">
          <button
            class="btn btn-outline-primary dropdown-toggle btn-lg"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            More
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">
                NHL
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                WNBA
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                NASCAR
              </a>
            </li>
          </ul>
        </div>
      </section>
      <h1>Contest for you</h1>
      <ContestCard />
    </section>
  );
}

export default Lobby;
