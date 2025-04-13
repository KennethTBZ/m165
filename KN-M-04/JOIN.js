db.games.aggregate([
    {
        $lookup: {
            from: "teams",
            localField: "teams1",
            foreignField: "_id",
            as: "team1_info"
        }
    },
    {
        $project: {
            date: 1,
            location: 1,
            time: 1,
            "team1_info.name": 1,
            "team1_info.trainer": 1
        }
    }
]);


db.games.aggregate([
    {
        $lookup: {
            from: "teams",
            localField: "teams1",
            foreignField: "_id",
            as: "team1_info"
        }
    },
    { $unwind: "$team1_info" },
    { $match: { "team1_info.trainer": "JJ Redick" } },
    {
        $project: {
            date: 1,
            location: 1,
            "team1_info.name": 1,
            "team1_info.trainer": 1
        }
    }
]);
