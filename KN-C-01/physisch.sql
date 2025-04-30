CREATE KEYSPACE basketball
WITH replication = {
    'class': 'SimpleStrategy',
    'replication_factor': 1
};

USE basketball;

CREATE TABLE teams_by_league (
    league_id UUID,
    team_id UUID,
    team_name TEXT,
    trainer_name TEXT,
    PRIMARY KEY (league_id, team_id)
);


CREATE TABLE players_by_teams (
    team_id UUID,
    player_id UUID,
    player_name TEXT,
    age INT,
    position TEXT,
    nationality TEXT,
    PRIMARY KEY (team_id, player_id)
);


CREATE TABLE games_by_date (
    date DATE,
    game_id UUID,
    time TIME,
    location TEXT,
    team_1 UUID,
    team_2 UUID,
    PRIMARY KEY (date, game_id)
);

