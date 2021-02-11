const Potion = require("../lib/Potion");

// Sets a default empty string if no name is entered
function Player(name = "") {
    this.name = name;
    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7);
    this.inventory = [new Potion("health"), new Potion()];
}

// Prototype methods prevent creating multiple instances of each
// method.  If getStats() was declared within the constructor,
// each Player object would have an instance of the function
Player.prototype.getStats = function () {
    return {
        potions: this.inventory.length,
        health: this.health,
        strength: this.strength,
        agility: this.agility
    }
}

Player.prototype.getInventory = function () {
    if (this.inventory.length) {
        return this.inventory;
    } else {
        return false;
    }
}

module.exports = Player;