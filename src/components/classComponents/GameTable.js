import react, { Component } from "react";

// css 
import './GameTable.css'

// import components 
import UiButton from "../funcComponents/ui/uiButton/UiButton";

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

        let resultMatch = {
            text: '',
            vinceUser: false,
            vinceCpu: false,
            user_choice: '',
            cpu_choice: ''
        }
        const resultMatrix = [
            [resultMatch = {
                text: 'Pareggio',
                vinceUser: false,
                vinceCpu: false,
                user_choice: 0,
                cpu_choice: 0
            }, resultMatch = {
                text: 'Vince Sheldon',
                vinceUser: false,
                vinceCpu: true,
                user_choice: 0,
                cpu_choice: 1
            }, resultMatch = {
                text: 'Hai vinto',
                vinceUser: true,
                vinceCpu: false,
                user_choice: 0,
                cpu_choice: 2
            },
            resultMatch = {
                text: 'Vince Sheldon',
                vinceUser: false,
                vinceCpu: true,
                user_choice: 0,
                cpu_choice: 3
            }, resultMatch = {
                text: 'Hai vinto',
                vinceUser: true,
                vinceCpu: false,
                user_choice: 0,
                cpu_choice: 4
            }

            ],  /* 1 */
            [resultMatch = {
                text: 'Hai vinto',
                vinceUser: true,
                vinceCpu: false,
                user_choice: 1,
                cpu_choice: 0
            }, resultMatch = {
                text: 'Pareggio',
                vinceUser: false,
                vinceCpu: false,
                user_choice: 1,
                cpu_choice: 1
            }, resultMatch = {
                text: 'Vince Sheldon',
                vinceUser: false,
                vinceCpu: true,
                user_choice: 1,
                cpu_choice: 2
            },
            resultMatch = {
                text: 'Hai vinto',
                vinceUser: true,
                vinceCpu: false,
                user_choice: 1,
                cpu_choice: 3
            }, resultMatch = {
                text: 'Vince Sheldon',
                vinceUser: false,
                vinceCpu: true,
                user_choice: 1,
                cpu_choice: 4
            }
            ],  /* 2 */
            [resultMatch = {
                text: 'Vince Sheldon',
                vinceUser: false,
                vinceCpu: true,
                user_choice: 2,
                cpu_choice: 0
            }, resultMatch = {
                text: 'Hai vinto',
                vinceUser: true,
                vinceCpu: false,
                user_choice: 2,
                cpu_choice: 1
            }, resultMatch = {
                text: 'Pareggio',
                vinceUser: false,
                vinceCpu: false,
                user_choice: 2,
                cpu_choice: 2
            },
            resultMatch = {
                text: 'Hai vinto',
                vinceUser: true,
                vinceCpu: false,
                user_choice: 2,
                cpu_choice: 3
            }, resultMatch = {
                text: 'Vince Sheldon',
                vinceUser: false,
                vinceCpu: true,
                user_choice: 2,
                cpu_choice: 4
            }
            ],  /* 3 */
            [resultMatch = {
                text: 'Hai vinto',
                vinceUser: true,
                vinceCpu: false,
                user_choice: 3,
                cpu_choice: 0
            }, resultMatch = {
                text: 'Vince Sheldon',
                vinceUser: false,
                vinceCpu: true,
                user_choice: 3,
                cpu_choice: 1
            }, resultMatch = {
                text: 'Vince Sheldon',
                vinceUser: false,
                vinceCpu: true,
                user_choice: 3,
                cpu_choice: 2
            },
            resultMatch = {
                text: 'Pareggio',
                vinceUser: false,
                vinceCpu: false,
                user_choice: 3,
                cpu_choice: 3
            }, resultMatch = {
                text: 'Hai vinto',
                vinceUser: true,
                vinceCpu: false,
                user_choice: 3,
                cpu_choice: 4
            }
            ],  /* 4 */
            [resultMatch = {
                text: 'Vince Sheldon',
                vinceUser: false,
                vinceCpu: true,
                user_choice: 4,
                cpu_choice: 0
            }, resultMatch = {
                text: 'Hai vinto',
                vinceUser: true,
                vinceCpu: false,
                user_choice: 4,
                cpu_choice: 1
            }, resultMatch = {
                text: 'Hai vinto',
                vinceUser: true,
                vinceCpu: false,
                user_choice: 4,
                cpu_choice: 2
            },
            resultMatch = {
                text: 'Vince Sheldon',
                vinceUser: false,
                vinceCpu: true,
                user_choice: 4,
                cpu_choice: 3
            }, resultMatch = {
                text: 'Pareggio',
                vinceUser: false,
                vinceCpu: false,
                user_choice: 4,
                cpu_choice: 4
            }
            ]
        ];



        console.log(resultMatrix[user_score][cpu_score].text, resultMatrix[user_score][cpu_score].user_choice, resultMatrix[user_score][cpu_score].cpu_choice);

    }
    render() {
        return (
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
        )
    }
}

export default GameTable