const players = [
    {
    "id": 1,
    "name": "Ivan",
    "scorePoints": 4500
    },
    {
    "id": 2,
    "name": "Petr",
    "scorePoints": 3600
    },
    {
    "id": 3,
    "name": "Vadim",
    "scorePoints": 3433
    },
    {
    "id": 4,
    "name": "Olga",
    "scorePoints": 2356
    },
    
    ];

    let points = []

    for (elementKey in players) {
        points.push (players[elementKey].scorePoints)
    }; 

console.log(points);

let maxScorePoints = Math.max(...points);
console.log (maxScorePoints);