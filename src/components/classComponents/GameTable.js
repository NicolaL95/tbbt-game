import react, { Component } from "react";


// css 
import './GameTable.css'

// import components 

import UiButton from "../funcComponents/ui/uiButton/UiButton";
import SheldonAdvisor from "../funcComponents/SheldonAdvisor";

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
import { calcMatch, sheldonIsTooSmartForYou, iaDecision, powerPlay } from '../../utils/utils'

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

                let cpu_score = sheldonIsTooSmartForYou(cpu_bluff, playerBeliveInBluff, bluffWorks, nOfGames, powerPlay(user_score))

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
    endGame = () => {
        if ((localStorage.getItem('userScore')) > 4 || (localStorage.getItem('cpuScore')) > 4) {
            return true
        }
        return false

    }
    render() {
        return (
            <>
                {

                    !this.endGame() &&
                    <>
                        <div className="game_table_container">

                            <div className="user_box w-50">
                                <div>
                                    <div className='box_result'>
                                        <img className="img-set pb_7" src={geology_user} alt="" />
                                        {this.calcLifeUser()}
                                    </div>
                                    <p> Studente di Geologia(Tu)</p>
                                </div>

                                <div className="button_container">
                                    <div className="b1">
                                        <UiButton
                                            style={{ marginRight: 16 }}
                                            children={<img className={this.state.hasChoicePlayer.paperChoice ? 'choice_border' : this.state.hasBluffPlayer.paperBluff ? 'bluff_border' : ''} src={carta} alt="" />}
                                            id={0}
                                            callback={this.playGame}
                                        />
                                        <UiButton
                                            style={{ marginLeft: 16 }}
                                            children={<img className={this.state.hasChoicePlayer.scissorChoice ? 'choice_border' : this.state.hasBluffPlayer.scissorBluff ? 'bluff_border' : ''} src={forbici} alt="" />}
                                            id={1}
                                            callback={this.playGame}
                                        />
                                    </div>
                                    <div className="b2">
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
                                    </div>
                                    <div className="b3">
                                        <UiButton
                                            children={<img className={this.state.hasChoicePlayer.spockChoice ? 'choice_border' : this.state.hasBluffPlayer.spockBluff ? 'bluff_border' : ''} src={spock} alt="" />}
                                            id={4}
                                            callback={this.playGame}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="cpu_box w-50">
                                <div>
                                    <div className='box_result'>
                                        {this.calcLifeCpu()}
                                        <img className="img-set" src={sheldon_cpu} alt="" />
                                    </div>
                                    <p style={{ textAlign: 'end' }}>Sheldon</p>

                                </div>


                                <div className="button_container">
                                    <div className="b1">
                                        <UiButton
                                            style={{ marginRight: 16 }}
                                            children={<img className={this.state.hasChoiceCpu.paperChoice ? 'choice_border' : this.state.hasBluffCpu.paperBluff ? 'bluff_border' : ''} src={carta} alt="" />}

                                        />
                                        <UiButton
                                            style={{ marginLeft: 16 }}
                                            children={<img className={this.state.hasChoiceCpu.scissorChoice ? 'choice_border' : this.state.hasBluffCpu.scissorBluff ? 'bluff_border' : ''} src={forbici} alt="" />}
                                        />
                                    </div>
                                    <div className="b2">
                                        <UiButton
                                            children={<img className={this.state.hasChoiceCpu.rockChoice ? 'choice_border' : this.state.hasBluffCpu.rockBluff ? 'bluff_border' : ''} src={sasso} alt="" />}


                                        />
                                        <UiButton
                                            children={<img className={this.state.hasChoiceCpu.lizardChoice ? 'choice_border' : this.state.hasBluffCpu.lizardBluff ? 'bluff_border' : ''} src={lizard} alt="" />}

                                        />
                                    </div>
                                    <div className="b3">
                                        <UiButton
                                            children={<img className={this.state.hasChoiceCpu.spockChoice ? 'choice_border' : this.state.hasBluffCpu.spockBluff ? 'bluff_border' : ''} src={spock} alt="" />}

                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sheldon_noisy">

                            <SheldonAdvisor
                                children={
                                    <div className="sheldon_text"></div>
                                }
                            />
                        </div>
                    </>
                }

                {
                    this.endGame() &&
                    <>
                        {this.reportGame()}
                    </>
                }
            </>
        )
    }
    calcLifeUser = () => {
        if (localStorage.getItem("cpuScore") == null) {
            return <div className="life">
                <div>

                </div>
            </div>
        } else if (localStorage.getItem("cpuScore") == 1) {
            return <div className="life">
                <div className="life-1"></div>
            </div>
        } else if (localStorage.getItem("cpuScore") == 2) {
            return <div className="life">
                <div className="life-2"></div>
            </div>
        } else if (localStorage.getItem("cpuScore") == 3) {
            return <div className="life">
                <div className="life-3"></div>
            </div>
        } else if (localStorage.getItem("cpuScore") == 4) {
            return <div className="life">
                <div className="life-4">

                </div>
            </div>
        } else if (localStorage.getItem("cpuScore") == 5) {
            return <div className="life">
                <div className="life-5">

                </div>
            </div>
        }

    }

    calcLifeCpu = () => {
        if (localStorage.getItem("userScore") == null) {
            return <div className="life">
                <div>

                </div>
            </div>
        } else if (localStorage.getItem("userScore") == 1) {
            return <div className="life">
                <div className="life-1"></div>
            </div>
        } else if (localStorage.getItem("userScore") == 2) {
            return <div className="life">
                <div className="life-2"></div>
            </div>
        } else if (localStorage.getItem("userScore") == 3) {
            return <div className="life">
                <div className="life-3"></div>
            </div>
        } else if (localStorage.getItem("userScore") == 4) {
            return <div className="life">
                <div className="life-4">

                </div>
            </div>
        } else if (localStorage.getItem("userScore") == 5) {
            return <div className="life">
                <div className="life-5">

                </div>
            </div>
        }

    }
    restart() {
        localStorage.clear();
    }

    // user win game render 
    reportGame = () => {
        if (localStorage.getItem("userScore") == 5) {
            return <div className="winGame">
                <a onClick={this.restart} href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">Clicca qui per riscattare il tuo buono sconto di 10 euro</a>
            </div>
        } else if (localStorage.getItem("cpuScore") == 5) {
            return <div className="loseGame">

                <a onClick={this.restart} href="http://localhost:3000/">cliccami</a>

            </div>
        }
    }
}

export default GameTable