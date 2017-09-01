var form = document.getElementById('poke-form')
var userImage = document.getElementById('user-poke-style-image')
var userPokeName = document.getElementById('user-poke-name')
var compImage = document.getElementById('computer-poke-style-image')
var compPokeName = document.getElementById('computer-poke-name')
form.addEventListener('submit', (event) => {
  event.preventDefault()
  //get data from user
  var userChoice = event.target.elements['poke-name'].value
  //using user input, get specific pokemon data from api
  fetch('http://pokeapi.co/api/v2/pokemon/' + userChoice + '/')
    .then((response) => {
      return response.json()
        .then((pokemon) => {
          console.log(pokemon);
          //set user image tag to current pokemon picture
          userImage.setAttribute('src', pokemon.sprites.front_default)
          userPokeName.innerText = pokemon.name
      })
  })
  //generate random pokemon for computer
  var compChoice = Math.floor(Math.random() * 721) + 1
  //using random pokemon, get specific pokemon data from api
  fetch('http://pokeapi.co/api/v2/pokemon/' + compChoice + '/')
    .then((response) => {
      return response.json()
        .then((pokemon) => {
          console.log(pokemon);
          //set computer image tag to the random pokemon's picture
          compImage.setAttribute('src', pokemon.sprites.front_default)
          compPokeName.innerText = pokemon.name
      })
  })
})
