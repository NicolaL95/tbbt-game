import react, { Component } from "react";


// css 
import './GameTable.css'

// import components 

import UiButton from "../funcComponents/ui/uiButton/UiButton";

//images
import sheldon_cpu from "../../assets/images/sheldon_cpu.png"
import geology_user from "../../assets/images/geology_user.png"

// import utils 
import { calcMatch } from '../../utils/utils'

class GameTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sNumOfGames: 0,
            sUserScore: 0,
            sCpuSCore: 0
        };
    }

    componentDidMount() {

    }

    componentDidUpdate() {

    }

    componentWillUnmount() {

    }

    // funzione play game 
    playGame = (user_score) => {
        let nOfGames = localStorage.getItem("nOfGames")
        let userScore = localStorage.getItem("userScore")
        let cpuScore = localStorage.getItem("cpuScore")


        let cpu_score = Math.floor(Math.random() * 5);
        let result = calcMatch(user_score, cpu_score)

        if (result.vinceUser == true) {
            userScore++;
            localStorage.setItem("userScore", userScore)
        }
        else if (result.vinceCpu == true) {
            cpuScore++;
            localStorage.setItem("cpuScore", cpuScore)
        }
        nOfGames++;
        localStorage.setItem("nOfGames", nOfGames);

        this.setState({
            sNumOfGames: nOfGames,
            sUserScore: userScore,
            sCpuSCore: cpuScore
        })

        console.log(result);
    }
    render() {
        return (
            <>
                <div className="game_table_container">
                    <div className="user_box">
                        <img src={geology_user} alt="" />
                        <div>
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
                    </div>
                    <div className="cpu_box">

                    </div>
                </div>
                <div className='score'>
                    <p>Round n  {this.state.sNumOfGames}</p>
                    <div className='players_score'>
                        <div className='user_score'>
                            <p>Utente42</p>
                            <p> {this.state.sUserScore}</p>
                        </div>
                        <div className='cpu_score'>
                            <p>Sheldon</p>
                            <p>{this.state.sCpuSCore}</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default GameTable