import GameTable from '../components/classComponents/GameTable';
import './Home.css';
import UiFooter from '../components/funcComponents/ui/uiFooter/UiFooter';
function Home() {
  return (
    <div className="Home">
      <GameTable />
      <UiFooter />
    </div>
  );
}

export default Home;
