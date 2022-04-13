import GameTable from '../components/classComponents/GameTable';
import './Home.css';
import UiFooter from '../components/funcComponents/ui/uiFooter/UiFooter';
import UiHeader from "../components/funcComponents/ui/uiButton/uiHeader/UiHeader"
import RuleGames from '../components/funcComponents/ruleGames/RuleGames'
import Advertising from '../components/classComponents/Advertising';
//images
import bg_image from '../assets/images/tbbt_bg_image.jpg'


function Home() {



  return (
    <div className="Home">
      <UiHeader />
      <main>
        <div className="jumbotron" style={{ backgroundImage: `url(${bg_image})` }}></div>
          <RuleGames />
        <div className="box_game_advertising">
          <GameTable />
          <Advertising />

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
