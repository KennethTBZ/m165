db.teams.find(
    {},
    { "players.name": 1, _id: 0 }
  )
  


  db.teams.aggregate([
    { $unwind: "$players" },  
    { $match: { "players.position": "Guard" } }, 
    { $project: { "players.name": 1, "players.position": 1, "_id": 0 } }  
  ])
  