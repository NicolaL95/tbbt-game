import React from "react";
// btn 
import UiButton from "../ui/uiButton/UiButton";
// img 
import sheldonImg from '../../../assets/images/sheldon.jpg'

// css 
import './RuleGames.css'
// video 
import rule from '../../../assets/videos/rule.mp4'

function RuleGames(props) {
    const playGame = () => {
        props.callback()
    }
    return (
        <div id="rule_games">
            <h1>Ti ringraziamo per aver acquistato dal nostro shop!</h1>
            <div className="challenge">

                <div className="challenge_text">
                    <h2>Sheldon vuole sfidarti al suo gioco preferito: Sasso-carta-forbici-lizard-Spock!</h2>
                    <h5> Se riuscirai a batterlo riceverai un regalo a sorpresa insieme al tuo ordine </h5>
                </div>


                <img src={sheldonImg}></img>
            </div>

            <div id="question_challenge">
                <span>Accetti la sfida? </span>
            </div>
            <div className="explane_rule">
                <h2> Regole del gioco  </h2>
                <video controls>
                    <source src={rule} type="video/mp4">

                    </source>
                </video>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Pierre_ciseaux_feuille_l%C3%A9zard_spock_aligned.svg/220px-Pierre_ciseaux_feuille_l%C3%A9zard_spock_aligned.svg.png" />
                <div className="paragr">
                    <p>Le regole sono semplici: le forbici tagliano la carta; la carta copre la pietra; la pietra schiaccia la lucertola; la lucertola avvelena Spock; Spock rompe le forbici; le forbici decapitano la lucertola; la lucertola mangia la carta; la carta invalida Spock; Spock vaporizza il sasso; il sasso rompe le forbici</p>
                    <p>
                        Inoltre abbiamo aggiunto un ulteriore funzionalità : IL BLUFF
                    </p>
                    <p>
                        La prima giocata sarà appunto la dichiarazione di Bluff e si contraddistingue con il bordo rosso attorno al pulsante, successivamente effettuerai la tua giocata vera e propria scegliendo se credere o meno al bluff di Sceldon
                    </p>
                </div>

            </div>


        </div>
    )
}


export default RuleGames