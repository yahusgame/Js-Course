// Challenge
let player = {
    fun: 0,
    health: 100,
    play: function () {
        console.log('have play');
        this.fun += 20;
        console.log('fun: ', this.fun);
    },
    eat: function (food) {
        if (food == 'apple') {
            this.health += 10;
        }
        else if( food == 'candy') {
            this.health -= 5;
            this.fun += 5;
        }
    }
};
player.play();
console.log(player);
player.eat('apple');
console.log(player);