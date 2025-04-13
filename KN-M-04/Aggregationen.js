db.games.aggregate([
    { $match: { time: "19:00" } },
    { $match: { location: "Los Angeles, Staples Center" } }
]);



db.games.aggregate([
    { $match: { location: { $regex: /Los Angeles/ } } },
    { $project: { location: 1, date: 1, time: 1, _id: 0 } },
    { $sort: { date: 1 } }
]);


db.games.aggregate([
    {
        $group: {
            _id: "$location",
            totalGames: { $sum: 1 }
        }
    }
]);
