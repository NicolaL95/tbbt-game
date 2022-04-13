import react, { Component } from "react";


// css 
import './GameTable.css'

// import components 

import UiButton from "../funcComponents/ui/uiButton/UiButton";

//images
import sheldon_cpu from "../../assets/images/sheldon_cpu.png"
import geology_user from "../../assets/images/geology_user.png"
import carta from "../../assets/images/carta.png"
import sasso from "../../assets/images/sasso.png"
import forbici from "../../assets/images/forbici.png"
import lizard from "../../assets/images/lizard.png"
import spock from "../../assets/images/spock.png"

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
                {/* <p>Round n  {this.state.sNumOfGames}</p> */}
                <div className="game_table_container">

                    <div className="user_box w-50">
                        <img className="img-set" src={geology_user} alt="" />
                        <p> Studente di Geologia(Tu)</p>
                        <p> {this.state.sUserScore}</p>
                        <div>
                            <UiButton
                                children={<img className="btn_gameplay" src={carta} alt="" />}
                                id={0}
                                callback={this.playGame}
                            />
                            <UiButton
                                children={<img className="btn_gameplay" src={forbici} alt="" />}
                                id={1}
                                callback={this.playGame}
                            />
                            <UiButton
                                children={<img className="btn_gameplay" src={sasso} alt="" />}
                                id={2}
                                callback={this.playGame}
                            />
                            <UiButton
                                children={<img className="btn_gameplay" src={lizard} alt="" />}
                                id={3}
                                callback={this.playGame}
                            />
                            <UiButton
                                children={<img className="btn_gameplay" src={spock} alt="" />}
                                id={4}
                                callback={this.playGame}
                            />
                        </div>
                    </div>
                    <div className="cpu_box w-50">
                        <img className="img-set" src={sheldon_cpu} alt="" />
                        <p>Sheldon</p>
                        <p>{this.state.sCpuSCore}</p>

                        <div>
                            <UiButton
                                children={<img className="btn_gameplay" src={carta} alt="" />}

                            />
                            <UiButton
                                children={<img className="btn_gameplay" src={forbici} alt="" />}

                            />
                            <UiButton
                                children={<img className="btn_gameplay" src={sasso} alt="" />}


                            />
                            <UiButton
                                children={<img className="btn_gameplay" src={lizard} alt="" />}

                            />
                            <UiButton
                                children={<img className="btn_gameplay" src={spock} alt="" />}

                            />
                        </div>
                    </div>
                </div>

            </>
        )
    }
}

export default GameTable