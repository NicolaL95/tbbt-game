import react, { Component } from "react";

//images
import bg_image from '../../assets/images/tbbt_bg_image.jpg'
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
                <main>
                    <div className="jumbotron"></div>
                    <div className="container">
                        <h1>Ti ringraziamo per aver acquistato dal nostro shop!</h1>
                        <h2>Sheldon vuole sfidarti al suo gioco preferito: Sasso-carta-forbici-lizard-Spock! Accetti la sfida?</h2>
                        <p>Le regole sono semplici: le forbici tagliano la carta; la carta copre la pietra; la pietra schiaccia la lucertola; la lucertola avvelena Spock; Spock rompe le forbici; le forbici decapitano la lucertola; la lucertola mangia la carta; la carta invalida Spock; Spock vaporizza il sasso; il sasso rompe le forbici</p>
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
                    </div>
                </main>
            </>
        )
    }
}

export default GameTable