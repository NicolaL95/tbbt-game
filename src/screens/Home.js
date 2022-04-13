import GameTable from '../components/classComponents/GameTable';
import './Home.css';
import UiFooter from '../components/funcComponents/ui/uiFooter/UiFooter';
import UiHeader from "../components/funcComponents/ui/uiButton/uiHeader/UiHeader"
import Advertising from '../components/classComponents/Advertising';
//images
import bg_image from '../assets/images/tbbt_bg_image.jpg'


function Home() {

  let nOfGames = localStorage.getItem("nOfGames")
  let userScore = localStorage.getItem("userScore")
  let cpuScore = localStorage.getItem("cpuScore")

  return (
    <div className="Home">
      <UiHeader />
      <main>
        <div className="jumbotron" style={{ backgroundImage: `url(${bg_image})` }}></div>

        <div className="container">
          <h1>Ti ringraziamo per aver acquistato dal nostro shop!</h1>
          <h2>Sheldon vuole sfidarti al suo gioco preferito: Sasso-carta-forbici-lizard-Spock! Accetti la sfida?</h2>
          <p className='game_info'>Le regole sono semplici: le forbici tagliano la carta; la carta copre la pietra; la pietra schiaccia la lucertola; la lucertola avvelena Spock; Spock rompe le forbici; le forbici decapitano la lucertola; la lucertola mangia la carta; la carta invalida Spock; Spock vaporizza il sasso; il sasso rompe le forbici</p>
          <div className="box_game_advertising">
            <GameTable />
            <Advertising />

          </div>
        </div>

      </main>
      <UiFooter />
    </div>
  );
}

export default Home;
