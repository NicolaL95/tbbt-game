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

//audio
import game_audio from "../../assets/audio/game_audio.mp3"

// import utils 
import { calcMatch, sheldonIsTooSmartForYou, iaDecision } from '../../utils/utils'

class GameTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sNumOfGames: 0,
            sUserScore: 0,
            sCpuSCore: 0,
            timeToBluff: true,
            hasBluffPlayer: {
                paperBluff: false,
                scissorBluff: false,
                rockBluff: false,
                lizardBluff: false,
                spockBluff: false

            },
            hasBluffCpu: {
                paperBluff: false,
                scissorBluff: false,
                rockBluff: false,
                lizardBluff: false,
                spockBluff: false
            },
            hasChoicePlayer: {
                paperChoice: false,
                scissorChoice: false,
                rockChoice: false,
                lizardChoice: false,
                spockChoice: false

            },
            hasChoiceCpu: {
                paperChoice: false,
                scissorChoice: false,
                rockChoice: false,
                lizardChoice: false,
                spockChoice: false
            }
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


        let cpu_bluff = Math.floor(Math.random() * 5);

        if (this.state.timeToBluff) {
            this.setState({
                hasBluffPlayer: {
                    paperBluff: false,
                    scissorBluff: false,
                    rockBluff: false,
                    lizardBluff: false,
                    spockBluff: false

                },
                hasBluffCpu: {
                    paperBluff: false,
                    scissorBluff: false,
                    rockBluff: false,
                    lizardBluff: false,
                    spockBluff: false
                },
                hasChoicePlayer: {
                    paperChoice: false,
                    scissorChoice: false,
                    rockChoice: false,
                    lizardChoice: false,
                    spockChoice: false

                },
                hasChoiceCpu: {
                    paperChoice: false,
                    scissorChoice: false,
                    rockChoice: false,
                    lizardChoice: false,
                    spockChoice: false
                }

            })
            switch (user_score) {
                case 0:
                    this.setState({
                        hasBluffPlayer: {
                            paperBluff: true
                        }
                    })
                    break;
                case 1:
                    this.setState({
                        hasBluffPlayer: {
                            scissorBluff: true
                        }
                    })
                    break;
                case 2:
                    this.setState({
                        hasBluffPlayer: {
                            rockBluff: true
                        }
                    })
                    break;
                case 3:
                    this.setState({
                        hasBluffPlayer: {
                            lizardBluff: true
                        }
                    })
                    break;
                case 4:
                    this.setState({
                        hasBluffPlayer: {
                            spockBluff: true
                        }
                    })
                    break;
            }


            switch (cpu_bluff) {
                case 0:
                    this.setState({
                        hasBluffCpu: {
                            paperBluff: true
                        }
                    })
                    break;
                case 1:
                    this.setState({
                        hasBluffCpu: {
                            scissorBluff: true
                        }
                    })
                    break;
                case 2:
                    this.setState({
                        hasBluffCpu: {
                            rockBluff: true
                        }
                    })
                    break;
                case 3:
                    this.setState({
                        hasBluffCpu: {
                            lizardBluff: true
                        }
                    })
                    break;
                case 4:
                    this.setState({
                        hasBluffCpu: {
                            spockBluff: true
                        }
                    })
                    break;
            }

            this.state.timeToBluff = false;
        }
        else {

            switch (user_score) {
                case 0:
                    this.setState({
                        hasChoicePlayer: {
                            paperChoice: true
                        }
                    })
                    break;
                case 1:
                    this.setState({
                        hasChoicePlayer: {
                            scissorChoice: true
                        }
                    })
                    break;
                case 2:
                    this.setState({
                        hasChoicePlayer: {
                            rockChoice: true
                        }
                    })
                    break;
                case 3:
                    this.setState({
                        hasChoicePlayer: {
                            lizardChoice: true
                        }
                    })
                    break;
                case 4:
                    this.setState({
                        hasChoicePlayer: {
                            spockChoice: true
                        }
                    })
                    break;
            }
            new Audio(game_audio).play();

            let nOfGames = localStorage.getItem("nOfGames")
            console.log(localStorage.getItem("nOfGames"));
            let userScore = localStorage.getItem("userScore")
            let cpuScore = localStorage.getItem("cpuScore")
            let bluffWorks = localStorage.getItem("bluffWorks")
            let playerBeliveInBluff = localStorage.getItem("playerBeliveInBluff")

            const timer = setTimeout(() => {
                /*  let cpu_score = Math.floor(Math.random() * 5); */
                let cpu_score = sheldonIsTooSmartForYou(cpu_bluff, playerBeliveInBluff, bluffWorks, nOfGames)
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
                switch (cpu_score) {
                    case 0:
                        this.setState({
                            hasChoiceCpu: {
                                paperChoice: true
                            }
                        })
                        break;
                    case 1:
                        this.setState({
                            hasChoiceCpu: {
                                scissorChoice: true
                            }
                        })
                        break;
                    case 2:
                        this.setState({
                            hasChoiceCpu: {
                                rockChoice: true
                            }
                        })
                        break;
                    case 3:
                        this.setState({
                            hasChoiceCpu: {
                                lizardChoice: true
                            }
                        })
                        break;
                    case 4:
                        this.setState({
                            hasChoiceCpu: {
                                spockChoice: true
                            }
                        })
                        break;
                }

                iaDecision(nOfGames, result.vinceUser, result.vinceCpu);
                this.setState({
                    sNumOfGames: nOfGames,
                    sUserScore: userScore,
                    sCpuSCore: cpuScore,
                    timeToBluff: true,
                })
                console.log(result);
            }
                , 2000);

        }
    }
    render() {
        return (
            <>
                {/* <p>Round n  {this.state.sNumOfGames}</p> */}
                <div className="game_table_container">

                    <div className="user_box w-50">
                        <img className="img-set pb_7" src={geology_user} alt="" />
                        <p> Studente di Geologia(Tu)</p>
                        <p className="mb"> {this.state.sUserScore}</p>
                        <div className="button_container">
                            <UiButton
                                children={<img className={this.state.hasChoicePlayer.paperChoice ? 'choice_border' : this.state.hasBluffPlayer.paperBluff ? 'bluff_border' : ''} src={carta} alt="" />}
                                id={0}
                                callback={this.playGame}
                            />
                            <UiButton
                                children={<img className={this.state.hasChoicePlayer.scissorChoice ? 'choice_border' : this.state.hasBluffPlayer.scissorBluff ? 'bluff_border' : ''} src={forbici} alt="" />}
                                id={1}
                                callback={this.playGame}
                            />
                            <UiButton
                                children={<img className={this.state.hasChoicePlayer.rockChoice ? 'choice_border' : this.state.hasBluffPlayer.rockBluff ? 'bluff_border' : ''} src={sasso} alt="" />}
                                id={2}
                                callback={this.playGame}
                            />
                            <UiButton
                                children={<img className={this.state.hasChoicePlayer.lizardChoice ? 'choice_border' : this.state.hasBluffPlayer.lizardBluff ? 'bluff_border' : ''} src={lizard} alt="" />}
                                id={3}
                                callback={this.playGame}
                            />
                            <UiButton
                                children={<img className={this.state.hasChoicePlayer.spockChoice ? 'choice_border' : this.state.hasBluffPlayer.spockBluff ? 'bluff_border' : ''} src={spock} alt="" />}
                                id={4}
                                callback={this.playGame}
                            />
                        </div>
                    </div>
                    <div className="cpu_box w-50">
                        <img className="img-set" src={sheldon_cpu} alt="" />
                        <p>Sheldon</p>
                        <p className="mb">{this.state.sCpuSCore}</p>

                        <div className="button_container">
                            <UiButton
                                children={<img className={this.state.hasChoiceCpu.paperChoice ? 'choice_border' : this.state.hasBluffCpu.paperBluff ? 'bluff_border' : ''} src={carta} alt="" />}

                            />
                            <UiButton
                                children={<img className={this.state.hasChoiceCpu.scissorChoice ? 'choice_border' : this.state.hasBluffCpu.scissorBluff ? 'bluff_border' : ''} src={forbici} alt="" />}

                            />
                            <UiButton
                                children={<img className={this.state.hasChoiceCpu.rockChoice ? 'choice_border' : this.state.hasBluffCpu.rockBluff ? 'bluff_border' : ''} src={sasso} alt="" />}


                            />
                            <UiButton
                                children={<img className={this.state.hasChoiceCpu.lizardChoice ? 'choice_border' : this.state.hasBluffCpu.lizardBluff ? 'bluff_border' : ''} src={lizard} alt="" />}

                            />
                            <UiButton
                                children={<img className={this.state.hasChoiceCpu.spockChoice ? 'choice_border' : this.state.hasBluffCpu.spockBluff ? 'bluff_border' : ''} src={spock} alt="" />}

                            />
                        </div>
                    </div>
                </div>

            </>
        )
    }
}

export default GameTable