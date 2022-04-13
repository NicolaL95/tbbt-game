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

export { calcMatch }