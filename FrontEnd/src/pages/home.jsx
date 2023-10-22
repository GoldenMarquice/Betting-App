import Login from "../components/Login";
import "./home.css";

function Home() {
    return (
        <div className="home">
            <div id="carouselExampleSlidesOnly" className="carousel-slide"  data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://via.placeholder.com/800x400" className="d-block w-100" alt="Image 1" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://via.placeholder.com/800x400" className="d-block w-100" alt="Image 2" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://via.placeholder.com/800x400" className="d-block w-100" alt="Image 3" />
                    </div>
                </div>
            </div>
            <Login/>
                <h1>Explore the world of FanDuel sports and gaming</h1>
                <p>The best place to bet on sports, play online games, and build your team.</p>

                <section className="card-section">
                    <div className="card">
                        <img src="https://via.placeholder.com/800x400" alt="placeholder"></img>
                    </div>
                    <div className="card">
                        <img src="https://via.placeholder.com/800x400" alt="placeholder"></img>
                    </div>
                </section>
                <section className="card-section2">
                    <div className="card">
                        <img src="https://via.placeholder.com/800x400" alt="placeholder"></img>
                    </div>
                    <div className="card">
                        <img src="https://via.placeholder.com/800x400" alt="placeholder"></img>
                    </div>
                    <div className="card">
                        <img src="https://via.placeholder.com/800x400" alt="placeholder"></img>
                    </div>
                </section>
                <section className="why-section">
                    <h1>Why FanDuel?</h1>
                    <p>FanDuel makes every moment more. You're not just watching the game, you're a part of the action! Here's what you can do with FanDuel:</p>
                    <div className="reasons">
                        <div className="sports-betting">
                            <h5>Sports Betting</h5>
                            <p>FanDuel makes sports betting easy. You can bet on games, players, and even the color of the Gatorade! You can even check out NFL team odds, NBA team odds, MLB team odds, or NHL team odds to see who's the favorite.</p>
                        </div>
                        <div className="casino-games">
                            <h5>Casino Games</h5>
                            <p>FanDuel's state-of-the-art online casino offers online blackjack and online slot games. There are also online table games and Live Dealer Games that let you play with a real dealer.</p>
                        </div>
                        <div className="fantasy-sports">
                            <h5>Fantasy Sports</h5>
                            <p>Ever dreamed of managing a team? FanDuel makes fantasy easy. Whether you're playing Fantasy Football, Fantasy Baseball, or Fantasy Basketball. We've even got Fantasy Hockey, Fantasy Soccer, Fantasy Golf, and Fantasy NASCAR.</p>
                        </div>
                    </div>
                    <div className="reasons">
                        <div className="horse-betting">
                            <h5>Horse racing betting</h5>
                            <p>If the track calls you, FanDuel's the place! We've got everything you need for horse racing betting. Plus you can check out odds for all the big races, like Kentucky Derby Odds, Preakness Odds, Belmont Stakes Odds, and Breeders' Cup Odds.</p>
                        </div>
                        <div className="watch-play">
                            <h5>Watch and play</h5>
                            <p>FanDuel TV lets you stream sports and original content from anywhere. It's like having your favorite sports bar right on your computer or phone.</p>
                        </div>
                        <div className="stay-informed">
                            <h5>Stay informed</h5>
                            <p>FanDuel isn't just about playing; it's about learning too. With FanDuel Research, you can read up on the latest NFL news, NBA news, MLB news, NHL news, and even College Football news. It's also easy to catch up on all the odds, whether it's NFL Odds, NBA Odds, or College Football Odds.</p>
                        </div>
                    </div>
                </section>

            </div>
    );
}

export default Home;