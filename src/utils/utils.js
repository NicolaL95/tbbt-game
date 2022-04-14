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
function iaDecision(roundPlayed, playerWin, cpuWin) {

    let bluffWorksCounter = localStorage.getItem("bluffWorks") == null ? 0 : parseInt(localStorage.getItem("bluffWorks"));
    let playerBeliveInBluff = localStorage.getItem("playerBeliveInBluff") == null ? 0 : parseInt(localStorage.getItem("playerBeliveInBluff"));

    if (cpuWin == true) {
        if (roundPlayed == 1 || (playerBeliveInBluff == 0 && bluffWorksCounter == 0)) {

            bluffWorksCounter = bluffWorksCounter + 2

        }
        else {

            bluffWorksCounter = bluffWorksCounter + 1

        }
        localStorage.setItem("bluffWorks", bluffWorksCounter)

    } else if (playerWin == true) {
        if (roundPlayed == 1 || (playerBeliveInBluff == 0 && bluffWorksCounter == 0)) {
            playerBeliveInBluff = playerBeliveInBluff + 2
        }
        else {
            playerBeliveInBluff = playerBeliveInBluff + 1
        }
    }
    localStorage.setItem("playerBeliveInBluff", playerBeliveInBluff)
}


/* sheldonIsTooSmartForYou imposta il comportamento della cpu su una base probabilistica 
utilizza rispettivamente i seguenti parametri: bluff della cpu, numero di volte in cui la cpu ha vinto e perso, round giocati e mosse che vincerebbero contro il bluff dell'avversario */

function sheldonIsTooSmartForYou(bluffChoice, playerBeliveInBluff, bluffWorks, roundPlayed, powerPlay) {

    let finalChoice = null;

    let randomChoice = {
        randomChoice1: Math.floor(Math.random() * 12),
        randomChoice2: Math.floor(Math.random() * 12)
    }

    let randomHalf = Math.random();
    let notBluff = Math.floor(Math.random() * 5);

    /* Ottiene un id(associato ad una giocata, diverso dal bluff) */

    while (notBluff != bluffChoice) {
        notBluff = Math.floor(Math.random() * 5);
    }

    /* imposta la scelta come una delle due(scelte randomicamente) giocate che vincerebbero contro il buff dell'avversario */

    function smarterThanYou() {
        if (randomChoice.randomChoice2 > 3) {
            if (randomHalf < 0.5) {
                finalChoice = powerPlay[0]
            }
            else {
                finalChoice = powerPlay[1]
            }

        } else {
            finalChoice = notBluff
        }
    }

    /* Utilizza una base di probabilita' basata sul 50% oppure sul 33%/66% */
    if (roundPlayed == 1 || playerBeliveInBluff == bluffWorks) {
        if (randomChoice.randomChoice1 > 5) {
            finalChoice = bluffChoice
        } else {
            smarterThanYou();
        }
    } else if (bluffWorks > playerBeliveInBluff) {
        if (randomChoice.randomChoice1 > 3) {
            finalChoice = bluffChoice
        } else {
            smarterThanYou();
        }
    } else {
        if (randomChoice > 3) {
            smarterThanYou();

        } else {
            finalChoice = bluffChoice
        }
    }
    return finalChoice

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