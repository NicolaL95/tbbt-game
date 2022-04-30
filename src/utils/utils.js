import gadg1 from '../assets/images/gadget1.jpg';
import gadg2 from '../assets/images/gadget2.jpg';
import gadg3 from '../assets/images/gadget3.jpg';
import gadg4 from '../assets/images/gadget4.jpg';
import gadg5 from '../assets/images/gadget5.jpg';
import gadg6 from '../assets/images/gadget6.jpg';
import gadg7 from '../assets/images/gadget7.jpg';
import gadg8 from '../assets/images/tshirt-penny.jpg';


let gadgets = [
    {
        id: 1,
        image: gadg1,
        price: 6.99,
        description: 'Fantastico pupazzetto raffigurante una delle principali protagoniste della serie'
    },
    {
        id: 2,
        image: gadg2,
        price: 24.99,
        description: 'T shirt Rossa'
    },
    {
        id: 3,
        image: gadg3,
        price: 8.99,
        description: 'Tazza fantastica'
    },
    {
        id: 4,
        image: gadg4,
        price: 12.99,
        description: 'seconda tazza'
    },
    {
        id: 5,
        image: gadg5,
        price: 9.99,
        description: 'terza tazza'
    },
    {
        id: 6,
        image: gadg6,
        price: 8.99,
        description: 't shirt'
    },
    {
        id: 7,
        image: gadg7,
        price: 14.99,
        description: 'tazza carta forbice sasso'
    },
    {
        id: 8,
        image: gadg8,
        price: 19.99,
        description: 't shirt penny'
    },
]

// funzione bluff

// funzione calcolo risultato 
// Utilizza l'id della giocata(es 0 = carta, 1 = forbici etc etc) del giocatore e della cpu come coordinate per ottenere il risultato della partita

function calcMatch(user_choice, cpu_score) {

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

    resultMatch = resultMatrix[user_choice][cpu_score]
    return resultMatch
}

/* iaDecision imposta le variabili del localstorage  bluffWorks e playerBeliveInBluff in base all'andamento della partita.
bluffWorks e playerBeliveInBluff istruiscono l'IA a compiere una scelta piuttosto che un altra. */
function iaDecision(roundPlayed, playerChoice, cpuChoice, cpuBluff, playerBluff) {

    let casuistry = {
        cpuBluffPlayerChoice: calcMatch(playerChoice, cpuBluff),
        cpuChoicePlayerChoice: calcMatch(playerChoice, cpuChoice),
        cpuChoicePlayerBluff: calcMatch(playerBluff, cpuChoice)

    }

    let playerBeliveInBluffAndCounter = localStorage.getItem("playerBeliveInBluffAndCounter") == null ? 0 : parseInt(localStorage.getItem("playerBeliveInBluffAndCounter")) //avversario gioca counter al bluff

    let playerPlayBluff = localStorage.getItem("playerPlayBluff") == null ? 0 : parseInt(localStorage.getItem("playerPlayBluff")) //avversario conferma il suo bluff

    let playerDontPlayBluff = localStorage.getItem("playerDontPlayBluff") == null ? 0 : parseInt(localStorage.getItem("playerDontPlayBluff")) //avversaio non conferma il suo bluff

    let cpuPlayCounter = localStorage.getItem("cpuPlayCounter") == null ? 0 : parseInt(localStorage.getItem("cpuPlayCounter"))//cpu gioca il counter del bluff
    let cpuHasCountered = localStorage.getItem("cpuHasCountered") == null ? 0 : parseInt(localStorage.getItem("cpuHasCountered"))

    let playerPlayCounter = localStorage.getItem("playerPlayCounter") == null ? 0 : parseInt(localStorage.getItem("playerPlayCounter"))//cpu gioca il counter del bluff
    let playerHasCountered = localStorage.getItem("playerHasCountered") == null ? 0 : parseInt(localStorage.getItem("playerHasCountered"))


    let isBeginMatch = false;



    if (roundPlayed == 1 || (playerPlayBluff == 0 && playerDontPlayBluff == 0 && cpuPlayCounter == 0 && cpuHasCountered == 0 && playerPlayCounter == 0 && playerHasCountered == 0)) {
        isBeginMatch = true;
    }

    //expeted result: giochi counter del counter del giocatore



    if (playerChoice == playerBluff) {
        if (isBeginMatch == true) {
            playerPlayBluff = playerPlayBluff + 2
        } else {
            playerPlayBluff = playerPlayBluff + 1
        }
        localStorage.setItem("playerPlayBluff", playerPlayBluff)
    }
    //expeted result: giochi counter al bluff - 66% di giocare counter al bluff

    //avversaio non conferma il suo bluff
    else {
        if (isBeginMatch == true) {
            playerDontPlayBluff = playerDontPlayBluff + 2
        } else {
            playerDontPlayBluff = playerDontPlayBluff + 1
        }
        localStorage.setItem("playerDontPlayBluff", playerDontPlayBluff)
    }
    //expeted result: giochi tutto a parte il bluff - 33% di giocare counter al bluff


    //cpu vince giocando il counter del bluff
    if (casuistry.cpuBluffPlayerChoice.vinceUser && casuistry.cpuChoicePlayerChoice.vinceCpu) {
        if (isBeginMatch == true) {
            cpuPlayCounter = cpuPlayCounter + 2
        } else {
            cpuPlayCounter = cpuPlayCounter + 1
        }
        localStorage.setItem("cpuPlayCounter", cpuPlayCounter)
    } else if (casuistry.cpuBluffPlayerChoice.vinceUser && casuistry.cpuChoicePlayerChoice.vinceUser) {
        if (isBeginMatch == true) {
            cpuHasCountered = cpuHasCountered + 2
        } else {
            cpuHasCountered = cpuHasCountered + 1
        }
        localStorage.setItem("cpuHasCountered", cpuHasCountered)
    }

    //player vince giocando il counter del bluff
    if (casuistry.cpuChoicePlayerBluff.vinceUser && casuistry.cpuChoicePlayerChoice.vinceUser) {
        if (isBeginMatch == true) {
            playerPlayCounter = playerPlayCounter + 2
        } else {
            playerPlayCounter = playerPlayCounter + 1
        }
        localStorage.setItem("playerPlayCounter", playerPlayCounter)
    } else if (casuistry.cpuChoicePlayerBluff.vinceUser && casuistry.cpuChoicePlayerChoice.vinceCpu) {
        if (isBeginMatch == true) {
            playerHasCountered = playerHasCountered + 2
        } else {
            playerHasCountered = playerHasCountered + 1
        }
        localStorage.setItem("playerHasCountered", playerHasCountered)
    }


}
/* sheldonIsTooSmartForYou imposta il comportamento della cpu su una base probabilistica 
utilizza rispettivamente i seguenti parametri: bluff della cpu, numero di volte in cui la cpu ha vinto e perso, round giocati e mosse che vincerebbero contro il bluff dell'avversario 
utilizza due tipi di probabilita' per scegliere la mossa: 50% e 33%66%
*/

function sheldonIsTooSmartForYou(cpuBluffCalc, playerBluffCalc, playerPlayBluff, playerDontPlayBluff, cpuPlayCounter, cpuHasCountered, playerPlayCounter, playerHasCountered, powerPlayV) {

    let finalChoice = Math.floor(Math.random() * 5);

    let notBluff = Math.floor(Math.random() * 5);

    //Ottiene un id(associato ad una giocata, diverso dal bluff) 

    while (notBluff !== cpuBluffCalc) {
        notBluff = Math.floor(Math.random() * 5);
    }


    let randomChoice = {
        randomChoice1: Math.floor(Math.random() * 12),
        randomChoice2: Math.floor(Math.random() * 12)
    }

    let randomHalf = Math.random();
    let randomHalf2 = Math.random();

    function smarterThanYou() {
        if (randomChoice.randomChoice2 > 3) {
            if (randomHalf < 0.5) {
                finalChoice = powerPlayV[0]
            }
            else {
                finalChoice = powerPlayV[1]
            }

        } else {
            finalChoice = notBluff
        }
    }



    if (playerPlayBluff > playerDontPlayBluff) {
        //avversario conferma il suo bluff
        if (randomChoice.randomChoice1 > 3) {
            smarterThanYou();
        }
        else {
            finalChoice = notBluff
        }
    } else {
        if (randomChoice.randomChoice1 > 3) {
            //avversario non conferma il suo bluff
            finalChoice = notBluff
        }
        else {
            smarterThanYou();
        }
    }


    if (cpuPlayCounter + cpuHasCountered > playerPlayCounter + playerHasCountered) {
        if (randomHalf2 < 0.5) {
            finalChoice = BluffCalc(cpuBluffCalc, cpuPlayCounter, cpuHasCountered)
        }

    }
    else {
        if (randomHalf2 < 0.5) {
            finalChoice = BluffCalc(playerBluffCalc, playerPlayCounter, playerHasCountered)
        }
    }
    return finalChoice

}

function BluffCalc(bluffMove, playCounter, hasCountered) {
    //cpu vince giocando il counter del bluff
    /* Ottiene le due giocate che vincerebbero contro il bluff dell'avversario */
    let possiblePlays = powerPlay(bluffMove)
    let diramatedPlays = [powerPlay(possiblePlays[0]), powerPlay(possiblePlays[1])]
    const filteredArray = diramatedPlays[0].filter(value => diramatedPlays[1].includes(value));
    if (playCounter > hasCountered) {
        return filteredArray[0]
    }
    else {
        let possibleCounter = powerPlay(filteredArray[0])
        let diramatedPlaysC = [powerPlay(possibleCounter[0]), powerPlay(possibleCounter[1])]
        const filteredArrayC = diramatedPlaysC[0].filter(value => diramatedPlaysC[1].includes(value));
        return filteredArrayC[0]
    }
}

/* Ottiene le due giocate che vincerebbero contro il bluff dell'avversario */
function powerPlay(bluff) {
    let winningpPlay = []
    for (let index = 0; index < 5; index++) {
        let result = calcMatch(bluff, index);
        if (result.vinceCpu == true) {
            winningpPlay.push(index)
        }
    }

    return winningpPlay;

}



export { calcMatch, iaDecision, sheldonIsTooSmartForYou, powerPlay, gadgets }