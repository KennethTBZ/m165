use basketball

const league1Id = new ObjectId();
const league2Id = new ObjectId();
const league3Id = new ObjectId();

const team1Id = new ObjectId();
const team2Id = new ObjectId();
const team3Id = new ObjectId();
const team4Id = new ObjectId();
const team5Id = new ObjectId();


const player1Id = new ObjectId();
const player2Id = new ObjectId();
const player3Id = new ObjectId();
const player4Id = new ObjectId();

const player5Id = new ObjectId();
const player6Id = new ObjectId();
const player7Id = new ObjectId();
const player8Id = new ObjectId();

// Leagues
db.leagues.insertMany([
    { _id: league1Id, name: "NBA", season: "2024/2025" },
    { _id: league2Id, name: "NLB", season: "2024/2025" },
    { _id: league3Id, name: "SBL", season: "2024/2025" }
]);


// Teams
db.teams.insertOne({
    _id: team1Id,
    name: "Los Angeles Lakers",
    trainer: "JJ Redick",
        players: [
            { _id: player1Id, name: "LeBron James", age: 39, position: "Forward", nationality: "USA" },
            { _id: player2Id, name: "Austin Reaves", age: 25, position: "Guard", nationality: "USA" }
        ],
    league_id: league1Id
});

db.teams.insertOne({
    _id: team2Id,
    name: "Toronto Raptors",
    trainer: "Darko Rajaković",
        players: [
            { _id: player3Id, name: "Gradey Dick", age: 23, position: "Guard", nationality: "USA" },
            { _id: player4Id, name: "Scottie Barnes", age: 25, position: "Forward", nationality: "Canada" }
        ],
    league_id: league1Id
});

db.teams.insertOne({
    _id: team3Id,
    name: "Bernex Basket",
    trainer: "Mickael Delaville",
    players: [
        { _id: player5Id, name: "Louis Martin", age: 27, position: "Guard", nationality: "France" },
        { _id: player6Id, name: "Noah Dupont", age: 25, position: "Forward", nationality: "Switzerland" }
    ],
    league_id: league2Id
});

db.teams.insertOne({
    _id: team4Id,
    name: "Fribourg Olympic",
    trainer: "Petar Aleksić",
    players: [
        { _id: player7Id, name: "Ivan Rakic", age: 28, position: "Guard", nationality: "Serbia" },
        { _id: player8Id, name: "Luka Matic", age: 26, position: "Forward", nationality: "Croatia" }
    ],
    league_id: league2Id
});


// Games
db.games.insertMany([
    {
        _id: new ObjectId(),
        date: new Date("2025-01-15"),
        time: "19:00",
        location: "Los Angeles, Staples Center",
        teams1: team1Id, // Los Angeles Lakers
        teams2: team2Id, // Toronto Raptors
        team1_played: [
           player1Id, player2Id
        ],
        team2_played: [
           player3Id, player4Id
        ]
    },
    {
        _id: new ObjectId(),
        date: new Date("2025-02-10"),
        time: "18:30",
        location: "Fribourg, St. Leonhard",
        teams1: team3Id, // Fribourg Olympic
        teams2: team4Id, // Los Angeles Lakers
        team1_played: [
         player5Id, player6Id
        ],
        team2_played: [
            player7Id, player8Id
        ]
    }
]);
