const axios = require("axios");
let spelare = [
  "Dajana",
  "Katanic",
  "Amanda",
  "Wallin",
  "Kia",
  "Salomonsson",
  "Madeleine",
  "Lidin",
  "Marie",
  "Noren",
  "Caroline",
  "Larsson",
  "Elionore",
  "Magnusson",
  "Madelene",
  "Petersen",
  "Anna",
  "Lundqvist",
  "Emma",
  "Sjölen",
  "Joanna",
  "Lenner",
  "Malin",
  "Nordqvist",
  "Sofia",
  "Söderlund",
  "Lotta",
  "Björklund",
  "Josephine Mari",
  "Persson",
  "Pernilla",
  "Strand"
];

// let length = 1;
let length = spelare.length;
console.log(length);
for (let index = 0; index < length;) {
  const firstname = spelare[index];
  const lastname = spelare[index + 1];
  console.log(firstname + " " + lastname);
  index = index + 2;
  axios
    .post("http://localhost:7777/addplayerwithoutemail", {
      firstname: firstname,
      lastname: lastname,
      city: "Timrå",
      gender: "Dam",
      league: "Dam 2"
    })
    .then(res => {
      console.log(`statusCode: ${res.statusCode}`);
      console.log(res);
    })
    .catch(error => {
      console.error(error);
    });
}
