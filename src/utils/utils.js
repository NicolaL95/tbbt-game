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
        image : gadg1
    },
    {
        id: 2,
        image : gadg2
    },
    {
        id: 3,
        image : gadg3
    },
    {
        id: 4,
        image : gadg4
    },
    {
        id: 5,
        image : gadg5
    },
    {
        id: 6,
        image : gadg6
    },
    {
        id: 7,
        image : gadg7
    },
    {
        id: 8,
        image : gadg8
    },
]

// funzione bluff

// funzione calcolo risultato 
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

export { calcMatch,gadgets }