import GameTable from '../components/classComponents/GameTable';
import './Home.css';
import UiFooter from '../components/funcComponents/ui/uiFooter/UiFooter';
import UiHeader from "../components/funcComponents/ui/uiHeader/UiHeader";
import RuleGames from '../components/funcComponents/ruleGames/RuleGames';
import Advertising from '../components/classComponents/Advertising';



function Home() {


  return (
    <div className="Home">
      <UiHeader />
      <main>
        <div className="jumbotron" ></div>
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
