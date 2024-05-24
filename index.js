#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
class player {
    name;
    health = 100;
    constructor(name) {
        this.name = name;
    }
    healthDecrease() {
        let health = this.health - 25;
        this.health = health;
    }
    healthoncrease() {
        let health = (this.health = 100);
        this.health = health;
    }
}
class opponent {
    name;
    health = 100;
    constructor(name) {
        this.name = name;
    }
    healthDecrease() {
        let health = this.health - 25;
        this.health = health;
    }
}
let Player = await inquirer.prompt({
    type: "input",
    name: "player",
    message: chalk.bold.bgYellow("Enter your name: "),
});
let Opponent = await inquirer.prompt({
    type: "list",
    name: "opponent",
    message: chalk.bold.bgGray("Choose your opponent:"),
    choices: ["Skeleton", "Assasin", "Zombie"],
});
let p1 = new player(Player.player);
let o1 = new opponent(Opponent.opponent);
do {
    if (Opponent.opponent === "Skeleton") {
        // console.log(`${chalk.bold.blue(p1.name)} Vs ${chalk.bold.red(o1.name)}`);
        let ask = await inquirer.prompt({
            type: "list",
            name: "options",
            message: chalk.bgGreen("Choose your option: "),
            choices: ["Attack", "Get Energy", "Exit Game"],
        });
        if (ask.options == "Attack") {
            console.log(`${chalk.green.bgRed("Attacking....")}`);
            let num = Math.floor(Math.random() * 2);
            if (num === 0) {
                p1.healthDecrease();
                console.log(chalk.bold.red(`${p1.name}  Health ${p1.health}`));
                console.log(chalk.bold.blue(`${o1.name} Health ${o1.health}`));
                if (p1.health <= 0) {
                    console.log(chalk.bold.red("YOU LOOSE ,,! Better Luck Next time"));
                    process.exit();
                }
            }
            if (num === 1) {
                o1.healthDecrease();
                console.log(chalk.bold.red(`${o1.name} Health ${o1.health}`));
                console.log(chalk.bold.blue(`${p1.name} Health ${p1.health}`));
                if (o1.health <= 0) {
                    console.log(chalk.bold.green(`You win, Congratulations`));
                    process.exit();
                }
            }
        }
        if (ask.options == "Exit Game") {
            console.log(`${chalk.redBright.bold.italic("You Loose the Game, better luck next time ")}`);
            process.exit();
        }
        if (ask.options == "Get Energy") {
            p1.healthoncrease();
            console.log(chalk.bold.green(`Your Drink Energy portion now Health is ${p1.health}`));
        }
    }
    if (Opponent.opponent === "Assasin") {
        // console.log(`${chalk.bold.blue(p1.name)} Vs ${chalk.bold.red(o1.name)}`);
        let ask = await inquirer.prompt({
            type: "list",
            name: "options",
            message: chalk.bgGreen("Choose your option: "),
            choices: ["Attack", "Get Energy", "Exit Game"],
        });
        if (ask.options == "Attack") {
            console.log(`${chalk.green.bgRed("Attacking....")}`);
            let num = Math.floor(Math.random() * 2);
            if (num === 0) {
                p1.healthDecrease();
                console.log(chalk.bold.red(`${p1.name}  Health ${p1.health}`));
                console.log(chalk.bold.blue(`${o1.name} Health ${o1.health}`));
                if (p1.health <= 0) {
                    console.log(chalk.bold.red("YOU LOOSE ,,! Better Luck Next time"));
                    process.exit();
                }
            }
            if (num === 1) {
                o1.healthDecrease();
                console.log(chalk.bold.red(`${o1.name} Health ${o1.health}`));
                console.log(chalk.bold.blue(`${p1.name} Health ${p1.health}`));
                if (o1.health <= 0) {
                    console.log(chalk.bold.green(`You win, Congratulations`));
                    process.exit();
                }
            }
        }
        if (ask.options == "Exit Game") {
            console.log(`${chalk.redBright.bold.italic("You Loose the Game, better luck next time ")}`);
            process.exit();
        }
        if (ask.options == "Get Energy") {
            p1.healthoncrease();
            console.log(chalk.bold.green(`Your Drink Energy portion now Health is ${p1.health}`));
        }
    }
    if (Opponent.opponent === "Zombie") {
        // console.log(`${chalk.bold.blue(p1.name)} Vs ${chalk.bold.red(o1.name)}`);
        let ask = await inquirer.prompt({
            type: "list",
            name: "options",
            message: chalk.bgGreen("Choose your option: "),
            choices: ["Attack", "Get Energy", "Exit Game"],
        });
        if (ask.options == "Attack") {
            console.log(`${chalk.green.bgRed("Attacking....")}`);
            let num = Math.floor(Math.random() * 2);
            if (num === 0) {
                p1.healthDecrease();
                console.log(chalk.bold.red(`${p1.name}  Health ${p1.health}`));
                console.log(chalk.bold.blue(`${o1.name} Health ${o1.health}`));
                if (p1.health <= 0) {
                    console.log(chalk.bold.red("YOU LOOSE ,,! Better Luck Next time"));
                    process.exit();
                }
            }
            if (num === 1) {
                o1.healthDecrease();
                console.log(chalk.bold.red(`${o1.name} Health ${o1.health}`));
                console.log(chalk.bold.blue(`${p1.name} Health ${p1.health}`));
                if (o1.health <= 0) {
                    console.log(chalk.bold.green(`You win, Congratulations`));
                    process.exit();
                }
            }
        }
        if (ask.options == "Exit Game") {
            console.log(`${chalk.redBright.bold.italic("You Loose the Game, better luck next time ")}`);
            process.exit();
        }
        if (ask.options == "Get Energy") {
            p1.healthoncrease();
            console.log(chalk.bold.green(`Your Drink Energy portion now Health is ${p1.health}`));
        }
    }
} while (true);
