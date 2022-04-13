import react, { Component } from "react";

// css 
import './GameTable.css'

// import components 
import UiHeader from "../funcComponents/ui/uiButton/uiHeader/UiHeader";
import UiButton from "../funcComponents/ui/uiButton/UiButton";

// import utils 
import { calcMatch } from '../../utils/utils'

class GameTable extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {

    }

    componentDidUpdate() {

    }

    componentWillUnmount() {

    }

    // funzione play game 
    playGame = (user_score) => {
        let cpu_score = Math.floor(Math.random() * 5);
        let result = calcMatch(user_score, cpu_score)
        console.log(result);
    }
    render() {
        return (
            <>
                <UiHeader />
                <div className="game_table_container">
                    <div className="user_box">
                        <UiButton
                            nameBtn={'carta'}
                            id={0}
                            callback={this.playGame}
                        />
                        <UiButton
                            nameBtn={'forbice'}
                            id={1}
                            callback={this.playGame}
                        />
                        <UiButton
                            nameBtn={'sasso'}
                            id={2}
                            callback={this.playGame}
                        />
                        <UiButton
                            nameBtn={'lizard'}
                            id={3}
                            callback={this.playGame}

                        />
                        <UiButton
                            nameBtn={'spock'}
                            id={4}
                            callback={this.playGame}
                        />


                    </div>
                    <div className="cpu_box">

                    </div>
                </div>
            </>
        )
    }
}

export default GameTable