console.log('al;kdjfklasdjdfaskjdf;lk');

const heroes = [
    {
        name: 'Slate Slabrock',
        type: 'Wizard',
        damage: 5,
        health: 100
    },
    {
        name: 'Flint Ironstag',
        type: 'Knight',
        damage: 10,
        health: 50
    }
]


const boss = {
    health: 100,
    maxHealth: 100,
    damage: 5,
    level: 1
}

let attack = 0

function attackBoss() {
    heroes.forEach(h => {
        if (h.damage > 0 && h.health > 0) {
            attack += h.damage
        }
    })
    // console.log(attack)
    hurtBoss(attack)
    attack = 0
}


function hurtBoss(damage) {
    //find the boss
    //reduce boss health by attack amout
    //redraw boss
    if (boss.health > 0) {
        boss.health -= damage

    }
    if (boss.health < 0) boss.health = 0
    // console.log(boss)
}




