const myFighter = new Fighter({ name: 'Maximus', damage: 20, hp: 100, strength: 20, agility: 15 });
const myFighter2 = new Fighter({ name: 'Commodus', damage: 25, hp: 90, strength: 35, agility: 20 });
function Fighter() {
    let fighterMethods = {
        fighterProp: arguments[0],
        getName: function () {
            let a = this.fighterProp.name;
            return a;
        },
        getDamage: function () {
            let a = this.fighterProp.damage;
            return a;
        },
        getStrength: function () {
            let a = this.fighterProp.strength;
            return a;
        },
        getAgility: function () {
            let a = this.fighterProp.agility;
            return a;
        },
        getHealth: function () {
            let a = this.fighterProp.hp;
            return a;
        },
        attack: function () {
            let a = Math.floor(Math.random() * 100) + 1;
            let b = this.getStrength();
            let c = this.getAgility();
            let e = arguments[0].fighterProp.damage;
            let vn = arguments[0].fighterProp.name;
            if (a > 100 - b - c) {
                console.log(vn + ' makes ' + e + ' damage to ' + this.getName())
            } else {
                console.log(vn + ' attack missed')
            }
            return a > 100 - b - c;
        },
        logCombatHistory: function () {
            let a;
            console.log('Name: ' + this.getName() + ', Wins: ' + a)
        },
        heal: function () {
            let a = this.getHealth();
            a += 50;
            return a;
        },
        dealDamage: function () {
            let a = this.getHealth();
            let b = this.getDamage();
            if (a - b < 0) {
                return a - b;
            } else {
                return a - b;
            }
        },
        addWin: function () {
            let a = 0;
            return a;
        },
        addLose: function () {
            let a = 0;
            return a;
        }
    }
    return fighterMethods;
}
function battle() {
    let hp1 = myFighter.getHealth();
    let hp2 = myFighter2.getHealth();
    let damage1 = myFighter.getDamage();
    let damage2 = myFighter2.getDamage();
    let a;
    let b;
    while (hp1 >= 0 || hp2 >= 0) {
        a = arguments[0].attack(arguments[1]);
        b = arguments[1].attack(arguments[0]);
        if (a === true) {
            hp1 = hp1 - damage2;
            console.log(hp1)
            if (hp1 <= 0){
                console.log(myFighter2.getName()+' has won!')
                hp1 = 0;
                break;
            }
        }
        if (b === true) {
            hp2 = hp2 - damage1;
            console.log(hp2)
            if (hp2 <= 0){
                console.log(myFighter.getName()+' has won!')
                hp2 = 0;
                break;
            }
        }
    }
}
battle(myFighter, myFighter2)