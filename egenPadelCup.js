let players = [
  { id: 0, playedOpponents: [], playedWith: [] },
  { id: 1, playedOpponents: [], playedWith: [] },
  { id: 2, playedOpponents: [], playedWith: [] },
  { id: 3, playedOpponents: [], playedWith: [] },
  { id: 4, playedOpponents: [], playedWith: [] },
  { id: 5, playedOpponents: [], playedWith: [] },
  { id: 6, playedOpponents: [], playedWith: [] },
  { id: 7, playedOpponents: [], playedWith: [] }
];

let matches = [
  {
    hemma1: 0,
    hemma2: 0,
    borta1: 0,
    borta2: 0
  },
  {
    hemma1: 0,
    hemma2: 0,
    borta1: 0,
    borta2: 0
  },
  {
    hemma1: 0,
    hemma2: 0,
    borta1: 0,
    borta2: 0
  },
  {
    hemma1: 0,
    hemma2: 0,
    borta1: 0,
    borta2: 0
  },
  {
    hemma1: 0,
    hemma2: 0,
    borta1: 0,
    borta2: 0
  },
  {
    hemma1: 0,
    hemma2: 0,
    borta1: 0,
    borta2: 0
  },
  {
    hemma1: 0,
    hemma2: 0,
    borta1: 0,
    borta2: 0
  },
  {
    hemma1: 0,
    hemma2: 0,
    borta1: 0,
    borta2: 0
  },
  {
    hemma1: 0,
    hemma2: 0,
    borta1: 0,
    borta2: 0
  },
  {
    hemma1: 0,
    hemma2: 0,
    borta1: 0,
    borta2: 0
  },
  {
    hemma1: 0,
    hemma2: 0,
    borta1: 0,
    borta2: 0
  },
  {
    hemma1: 0,
    hemma2: 0,
    borta1: 0,
    borta2: 0
  },
  {
    hemma1: 0,
    hemma2: 0,
    borta1: 0,
    borta2: 0
  },
  {
    hemma1: 0,
    hemma2: 0,
    borta1: 0,
    borta2: 0
  }
];

let numberOfMatches = (players.length / 4) * (players.length - 1);
let rounds = players.length - 1;
let matchesPerRound = numberOfMatches / rounds;

let potentialPlayers = [0, 1, 2, 3, 4, 5, 6, 7];
let currentPlayer = 0;
let currentRound = 1;
let matchInRound = 1;
let hemma1 = 1000;
let hemma2 = 1000;
let borta1 = 1000;
let borta2 = 1000;

const nextPlayer = () => {
  if (currentPlayer === players.length - 1) {
    currentPlayer = 0;
  } else {
    currentPlayer++;
  }
};

const checkPlayedWith = player => {
  while (players[currentPlayer].playedWith.includes(player)) {
    nextPlayer();
  }
};

const checkPlayedAgainst = player => {
  if (
    players[currentPlayer].playedOpponents.filter(player => player === player)
      .length === 0
  ) {
  } else {
    while (
      players[currentPlayer].playedOpponents.filter(player => player === player)
        .length === 2
    )
      checkPlayedWith(player);
  }
};

// Skapa matcher
for (let index = 0; index < numberOfMatches; index++) {
  // hemma 1

  hemma1 = potentialPlayers[0];
  matches[index].hemma1 = hemma1;

  // hemma 2

  nextPlayer();
  checkPlayedWith(hemma1);
  // checkPlayedAgainst(hemma1);

  hemma2 = currentPlayer;
  matches[index].hemma2 = hemma2;

  // borta 1
  nextPlayer();
  // checkPlayedAgainst(hemma1);
  // checkPlayedAgainst(hemma2);
  borta1 = currentPlayer;
  matches[index].borta1 = borta1;

  // borta 2
  nextPlayer();
  checkPlayedWith(borta1);
  // checkPlayedAgainst(hemma1);
  // checkPlayedAgainst(hemma2);
  // checkPlayedAgainst(borta1);
  borta2 = currentPlayer;
  matches[index].borta2 = borta2;

  // Spara vilka alla spelat med och mot
  players[hemma1].playedWith.push(hemma2);
  players[hemma1].playedOpponents.push(borta1);
  players[hemma1].playedOpponents.push(borta2);
  players[hemma2].playedWith.push(hemma1);
  players[hemma2].playedOpponents.push(borta1);
  players[hemma2].playedOpponents.push(borta2);
  players[borta1].playedWith.push(borta2);
  players[borta1].playedOpponents.push(hemma1);
  players[borta1].playedOpponents.push(hemma2);
  players[borta2].playedWith.push(borta1);
  players[borta2].playedOpponents.push(hemma1);
  players[borta2].playedOpponents.push(hemma2);

  // Förbered för nästa match

  console.log(hemma1 + "" + hemma2 + " " + borta1 + "" + borta2);

  if (matchInRound === matchesPerRound) {
    matchInRound = 1;
  } else {
    potentialPlayers.splice(potentialPlayers.indexOf(hemma1), 1);
    potentialPlayers.splice(potentialPlayers.indexOf(hemma2), 1);
    potentialPlayers.splice(potentialPlayers.indexOf(borta1), 1);
    potentialPlayers.splice(potentialPlayers.indexOf(borta2), 1);
    console.log(potentialPlayers);
    matchInRound++;
  }
}

console.log(matches);
// 1
// 2

// 3
// 4

// 5
// 6

// 7
// 8

// 9
// 10

// 11
// 12

// 13
// 14
