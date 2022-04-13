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

        </div>


      </main>
      <UiFooter />
    </div>
  );
}

export default Home;
