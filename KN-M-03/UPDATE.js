db.teams.updateOne(
    { _id: new ObjectId("67d822e6613e3b4b24197751") },  
    { $set: { trainer: "Frank Vogel" } }  
);


db.teams.updateMany(
    { $or: [ { trainer: "Mickael Delaville" }, { trainer: "Petar Aleksić" } ] }, 
    { $set: { trainer: "New Coach" } }  
);

db.games.replaceOne(
    { date: new Date("2025-01-15") },  
    {  
        date: new Date("2025-01-15"),
        location: "Los Angeles, Crypto.com Arena", 
        result: "Win" 
    }
);