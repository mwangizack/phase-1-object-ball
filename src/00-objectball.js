function gameObject() {
  const teamStats = {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };

  return teamStats;
}

// console.log(gameObject());

function numPointsScored(playerName) {
  const gameStats = gameObject();
  for (let teamKey in gameStats) {
    let team = gameStats[teamKey];
    debugger;
    let allPlayers = team.players;
    debugger;
    for (let playerKey in allPlayers) {
      if (playerKey === playerName) {
        return allPlayers[playerKey].points;
      }
    }
  }
}

// console.log(numPointsScored("Brendan Haywood"));

function shoeSize(playerName) {
  const gameStats = gameObject();
  for (let teamKey in gameStats) {
    let team = gameStats[teamKey];
    debugger;
    let allPlayers = team.players;
    debugger;
    for (let playerKey in allPlayers) {
      if (playerKey === playerName) {
        return allPlayers[playerKey].shoe;
      }
    }
  }
}

// console.log(shoeSize("Brendan Haywood"));

function teamColors(team) {
  const gameStats = gameObject();
  for (let teamKey in gameStats) {
    let teamSide = gameStats[teamKey];
    debugger;
    let teamAlias = teamSide.teamName;
    debugger;
    if (teamAlias === team) {
      return teamSide.colors;
    }
  }
}

// console.log(teamColors("Charlotte Hornets"))

function teamNames() {
  const gameStats = gameObject();
  let teamNamesArray = [];
  for (let teamKey in gameStats) {
    let teamSide = gameStats[teamKey];
    debugger;
    let teamAlias = teamSide.teamName;
    teamNamesArray.push(teamAlias);
  }

  return teamNamesArray;
}

// console.log(teamNames())

function playerNumbers(team) {
  const gameStats = gameObject();
  let jerseyNumbers = [];
  for (let teamKey in gameStats) {
    let teamSide = gameStats[teamKey];
    debugger;
    let teamAlias = teamSide.teamName;
    debugger;
    if (teamAlias === team) {
      let allPlayers = teamSide.players;
      for (playerKey in allPlayers) {
        jerseyNumbers.push(allPlayers[playerKey].number);
      }
    }
  }

  return jerseyNumbers;
}

// console.log(playerNumbers("Charlotte Hornets"))

function playerStats(playerName) {
  const gameStats = gameObject();
  for (let teamKey in gameStats) {
    let team = gameStats[teamKey];
    debugger;
    let allPlayers = team.players;
    debugger;
    for (let playerKey in allPlayers) {
      if (playerKey === playerName) {
        return allPlayers[playerKey];
      }
    }
  }
}

// console.log(playerStats("Brendan Haywood"))

function bigShoeRebounds() {
  // Finding the maximum shoe size
  let playersShoeSizes = {};
  const gameStats = gameObject();
  for (let teamKey in gameStats) {
    let team = gameStats[teamKey];
    debugger;
    let allPlayers = team.players;
    debugger;
    for (let playerKey in allPlayers) {
      playersShoeSizes[playerKey] = allPlayers[playerKey].shoe;
    }
  }

  let shoeSizesArray = Object.values(playersShoeSizes);
  let maxShoeSize = Math.max(...shoeSizesArray);

  // Finding the player to whom the shoe size belongs
  let bigShoeIndex = shoeSizesArray.indexOf(maxShoeSize);
  let playersNames = Object.keys(playersShoeSizes);
  let bigShoePlayer = playersNames[bigShoeIndex];

  // Returning the rebounds of the player with the largest shoe size
  for (let teamKey in gameStats) {
    let team = gameStats[teamKey];
    debugger;
    let allPlayers = team.players;
    debugger;
    for (let playerKey in allPlayers) {
      if (playerKey === bigShoePlayer) {
        return allPlayers[playerKey].rebounds;
      }
    }
  }
}

console.log(bigShoeRebounds());
