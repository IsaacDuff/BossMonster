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
    updateBoss()
    if (boss.health < 0) boss.health = 0
    if (boss.health == 0) {
        gold += boss.gold
        bossLevelUp()
        playerLevelUp()
    }
    updateBoss()
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
    updateBoss()
}

function playerLevelUp() {
    heroes.forEach(p => {
        if (p.level == boss.level / 2) {
            heroes.forEach(p => p.health += 50)
            heroes.forEach(p => p.damage += 5)
            heroes.forEach(p => p.level++)
        }
    })
    updatePlayers('Slate Slabrock')
    updatePlayers('Flint Ironstag')
    // console.log(heroes)
}

function updatePlayers(name) {
    let hero = heroes.find(h => h.name == name)
    console.log('hero', hero);
    let heroElem = document.getElementById(hero.name)
    let statsView = heroElem.querySelector('.stats')
    statsView.innerHTML = `
    <p>HP: ${hero.health}</p>
    <p>Level: ${hero.level}</p>
    `
}

function updateBoss() {
    let bossElem = document.getElementById(boss)
    let statsView = bossElem.querySelector('.stats')
    statsView.innerHTML = `
    <h3>Boss Health: ${boss.health}</h3>
    <h3>Reward: $${boss.gold}</h3>
    <h3>Level: ${boss.level}</h3>
    `
}


//REVIEW - how to make boss stop attacking dead guy
function attackPlayers() {
    let target = Math.floor(Math.random() * heroes.length)
    let hurtHero = heroes[target]
    hurtHero.health -= boss.damage

    updatePlayers('Slate Slabrock')
    updatePlayers('Flint Ironstag')

    if (heroes.every(hero => hero.health <= 0)) {
        window.alert("You Suuuuuuuuuuck!!! Get good kid")
    }


    console.log(hurtHero)
    // console.log(target)
}
//REVIEW - uncomment this you foooooooool
// setInterval(attackPlayers, 2000)

updatePlayers('Slate Slabrock')
updatePlayers('Flint Ironstag')
updateBoss()



