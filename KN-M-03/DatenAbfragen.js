//Regex
db.leagues.find(
    { season: { $regex: /^2024/ } }
)

// Oder

db.teams.find({
    $or: [
        { trainer: "JJ Redick" },
        { trainer: "Darko Rajaković" }
    ]
});

// UND

db.games.find({
    $and: [
        { time: "19:00" },
        { location: "Los Angeles, Staples Center" }
    ]
});

// DATE

db.games.find({
    date: { $gt: new Date("2025-01-01") }
});


// Projektion
db.games.find(
    {},
    { location: 1, time: 1, date:1 }  
);

// Projektion ohne ID
db.games.find(
    {},
    { location: 1, time: 1, date:1, _id:0 }  
);
