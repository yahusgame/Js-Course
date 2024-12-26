let player = {
    age: 99,
    name: 'ABC',
    isActive: true,
    outfit : {
        color: 'blue',
        cost: 100,
        isNew: true,
        size: 'M'
    }
};



console.log(player);
console.log(player.name);
console.log(player['name']);

player.isActive = false;
console.log(player);

player.health = 100;
console.log(player);
delete player.health;
console.log(player);

console.log(player.outfit);

//Challenge: change a size 
player.outfit.size = 'L';
console.log(player);