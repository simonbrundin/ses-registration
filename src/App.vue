<template>
  <div id="app">
    <img class="logo" alt="logo" src="./assets/SES-logga.jpg" />
    <form action="http://localhost:7777/addplayer" method="post">
      <div>
        <input type="text" name="firstname" placeholder="Förnamn" />
        <input type="text" name="lastname" placeholder="Efternamn" />
      </div>

      <div>
        <select name="city">
          <option value disabled selected hidden>Välj stad...</option>
          <option value="stockholm">Stockholm</option>
          <option value="timrå">Timrå</option>
          <option value="örnsköldsvik">Örnsköldsvik</option>
        </select>
      </div>
      <div>
        <select name="gender">
          <option value disabled selected hidden>Välj...</option>
          <option value="herr">Herr</option>
          <option value="dam">Dam</option>
        </select>
      </div>
      <div>
        <input type="tel" placeholder="Telefonnummer" name="tel" />
        <input type="email" name="email" placeholder="Email" />
      </div>
      <div>
        <input type="radio" id="1" name="level" value="1" />
        <label for="1">1 - Nybörjare - Testat padel enstaka gånger</label>
        <br />
        <input type="radio" id="2" name="level" value="2" />
        <label for="2">2 - Nybörjare - Håller på att lära dig grunderna i padel</label>
        <br />
        <input type="radio" id="3" name="level" value="3" />
        <label for="3">
          3 - Nybörjare - Känner till grunderna i spelet men är obekväm med
          markslag och har problem med väggstuds
        </label>
        <br />
        <input type="radio" id="4" name="level" value="4" />
        <label for="4">
          4 - Medel - Spelat ett tag och känner grunderna väl och kan öka tempo
          i spelet, men spelar inte konsekvent
        </label>
        <br />
        <input type="radio" id="5" name="level" value="5" />
        <label for="5">
          5 - Medel - Har spelat ett par år och, även om det inte någon
          supertalang, får du bollen över nätet för det mesta och med rimlig
          kraft. Serva / släpp och liknande kan fortfarande vara inkonsekvent
        </label>
        <br />
        <input type="radio" id="6" name="level" value="6" />
        <label for="6">
          6 - Medel - Som nivå 5 men med bättre smash och specialskott. Också
          mer konsekvent och mer kontroll
        </label>
        <br />
        <input type="radio" id="7" name="level" value="7" />
        <label for="7">
          7 - Avancerad - Kan försvara och vända spelet mot motståndaren. Kan
          upprätthålla trycket på motståndaren med tunga volleys och bygga upp
          och slå vinnare. Förutom matcher har du antagligen börjat med
          specifika padelövningar
        </label>
        <br />
        <input type="radio" id="8" name="level" value="8" />
        <label for="8">
          8 - Avancerad - Du behärskar alla de tekniska och taktiska delarna av
          spelet. Kan läsa spelet och använda olika taktiska element beroende på
          motstånd. Du är förmodligen bland de bästa spelarna i din klubb och
          utövar padel regelbundet, troligtvis med tränare
        </label>
        <br />
        <input type="radio" id="9" name="level" value="9" />
        <label for="9">
          9 - Expert- Tillhör det absolut bästa och behärskar spelet på högsta
          nivå och kan spela nationella tävlingar med bra resultat
        </label>
        <br />
        <input type="radio" id="10" name="level" value="10" />
        <label for="10">
          10 - Expert - Som Fernando Belasteguín, Paquito Navarro eller någon
          liknande i sin storhetstid men bättre
        </label>
      </div>
      <button type="submit">Anmäl mig</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      firstname: "",
      lastname: "",
      city: "",
      number: "",
      email: "",
      level: 0
    };
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.logo {
  width: 500px;
}
</style>
