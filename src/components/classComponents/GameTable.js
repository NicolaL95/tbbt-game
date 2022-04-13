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
    playGame = () =>  {

    }
    render() {
        return (
            <div className="game_table_container">
                <div className="user_box">
                    <UiButton
                        nameBtn={'carta'}
                        id={0}
                        callback={playGame}
                    />
                    <UiButton
                        nameBtn={'forbice'}
                        id={1}
                        callback={}
                    />
                    <UiButton
                        nameBtn={'sasso'}
                        id={2}
                        callback={}
                    />
                    <UiButton 
                        nameBtn={'lizard'}
                        id={3}
                        callback={}

                    />
                    <UiButton 
                        nameBtn={'spock'}
                        id={4}
                        callback={}
                    />


                </div>
                <div className="cpu_box">

                </div>
            </div>
        )
    }
}

export default GameTable