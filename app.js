console.log('al;kdjfklasdjdfaskjdf;lk');

const heroes = [
    {
        name: 'Slate Slabrock',
        type: 'Wizard',
        damage: 5,
        health: 100,
        level: 1
    },
    {
        name: 'Flint Ironstag',
        type: 'Knight',
        damage: 10,
        health: 50,
        level: 1
    }
]


const boss = {
    health: 100,
    maxHealth: 100,
    damage: 5,
    gold: 1000,
    level: 1
}

let attack = 0
let gold = 0

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
    //reduce boss health by attack amount
    //redraw boss
    if (boss.health > 0) {
        boss.health -= damage

    }
    if (boss.health < 0) boss.health = 0
    if (boss.health == 0) {
        gold += boss.gold
        bossLevelUp()
        playerLevelUp()
    }
    console.log(gold)
    console.log(boss)
}


function bossLevelUp() {
    boss.maxHealth += 100
    boss.health = boss.maxHealth
    boss.damage += 10
    boss.level++
    boss.gold = (boss.gold * 2)
    console.log(boss)
}

function playerLevelUp() {
    heroes.forEach(p => {
        if (p.level == boss.level / 2) {
            heroes.forEach(p => p.health += 50)
            heroes.forEach(p => p.damage += 5)
            heroes.forEach(p => p.level++)
        }
    })

    console.log(heroes)
}


//REVIEW - how to make boss stop attacking dead guy
function attackPlayers() {
    let target = Math.floor(Math.random() * heroes.length)
    let hurtHero = heroes[target]
    hurtHero.health -= boss.damage

    if (heroes.every(hero => hero.health <= 0)) {
        window.alert("You Suuuuuuuuuuck!!! Get good kid")
    }


    console.log(hurtHero)
    // console.log(target)
}
//REVIEW - uncomment this you foooooooool
// setInterval(attackPlayers, 2000)



