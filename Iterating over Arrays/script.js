let scores = [10, 20, 30, 40, 50];
let i = 0;
while (i < scores.length) {
    scores[i]++;
    i++;
}
console.log(scores);

for (let i = 0; i < scores.length; i++) {
    scores[i]++;
}
console.log(scores)

scores.forEach(function (entry, index) {
    scores[index]++;
});
console.log(scores);

let catalog = [
    {
        title : 'JS for beginners',
        author : 'Zenva',
        copies : 1
    },
    {
        title : 'HTML for beginners',
        author : 'yahusgames',
        copies : 1
    },
    {
        title : 'CSS for beginners',
        author : 'Harun',
        copies : 1
    }
];

catalog.forEach(function (entry) {
    if(entry.author == 'Zenva') {
        entry.copies++;
    }
});
console.log(catalog);