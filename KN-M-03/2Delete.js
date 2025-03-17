use basketball

db.teams.deleteOne({ _id: ObjectId("67d822e6613e3b4b2419774e") });

db.teams.deleteMany({
    $or: [
        { _id: ObjectId("67d822e6613e3b4b2419774f") },
        { _id: ObjectId("67d822e6613e3b4b24197750") }
    ]
});