let players = [
  { id: 1, playedOpponents: [], playedWith: [] },
  { id: 2, playedOpponents: [], playedWith: [] },
  { id: 3, playedOpponents: [], playedWith: [] },
  { id: 4, playedOpponents: [], playedWith: [] },
  { id: 5, playedOpponents: [], playedWith: [] },
  { id: 6, playedOpponents: [], playedWith: [] },
  { id: 7, playedOpponents: [], playedWith: [] },
  { id: 8, playedOpponents: [], playedWith: [] },
  { id: 9, playedOpponents: [], playedWith: [] },
  { id: 10, playedOpponents: [], playedWith: [] },
  { id: 11, playedOpponents: [], playedWith: [] },
  { id: 12, playedOpponents: [], playedWith: [] }
];

let matches = [];
let potentialPlayers = [];
const resetPotentialPlayers = () => {
  players.forEach(player => {
    potentialPlayers.push(player.id);
  });
};
resetPotentialPlayers();
console.log(potentialPlayers);
let numberOfMatches = (players.length / 4) * (players.length - 1);
console.log(numberOfMatches + " matcher");
let rounds = players.length - 1;
console.log(rounds + " omgångar");
let currentPlayer = 0;
let currentRound = 1;

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
let hemma1 = 0;
let hemma2 = 0;
let borta1 = 0;
let borta2 = 0;

// Skapa matcher
for (let index = 0; index < numberOfMatches; index++) {
  // hemma 1
  hemma1 = potentialPlayers[0];
  potentialPlayers.splice(potentialPlayers.indexOf(hemma1), 1);

  // hemma 2
  hemma2 = potentialPlayers[0];
  potentialPlayers.splice(potentialPlayers.indexOf(hemma2), 1);

  // borta 1
  console.log(potentialPlayers[0]);
  console.log(players[potentialPlayers[0]].playedOpponents);
  console.log(
    players[potentialPlayers[0]].playedOpponents.filter(
      word => word === potentialPlayers[0]
    )
  );

  borta1 = potentialPlayers[0];
  potentialPlayers.splice(potentialPlayers.indexOf(borta1), 1);

  // borta 2
  // nextPlayer();
  // checkPlayedWith(borta1);
  // checkPlayedAgainst(hemma1);
  // checkPlayedAgainst(hemma2);
  // checkPlayedAgainst(borta1);
  let borta2 = potentialPlayers[0];
  potentialPlayers.splice(potentialPlayers.indexOf(borta2), 1);

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

  matches.push({
    hemma1: hemma1,
    hemma2: hemma2,
    borta1: borta1,
    borta2: borta2
  });

  // console.log(hemma1 + "" + hemma2 + " " + borta1 + "" + borta2);
  nextPlayer();
  // if (currentRound === players.length) {
  //   currentPlayer = 1;
  // } else {
  //   currentPlayer++;
  // }
  // for (let index = 0; index < array.length; index++) {
  //   const element = array[index];
  // }
}
console.log(matches);
console.log(matches.length);
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
