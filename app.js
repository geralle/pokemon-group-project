var form = document.getElementById('poke-form')
var userImage = document.getElementById('user-poke-style-image')
var userPokeName = document.getElementById('user-poke-name')
var compImage = document.getElementById('computer-poke-style-image')
var compPokeName = document.getElementById('computer-poke-name')
var randomButton = document.getElementById('random-button')
var attackButton = document.getElementById('attack-button')
var ability = document.getElementById('ability-display')
var userHP = document.getElementById('user-hits')
var compHP = document.getElementById('computer-hits')
randomButton.addEventListener('click', (event) => {
  event.preventDefault()
  var randomChoice = Math.floor(Math.random() * 721) + 1
  fetch('http://pokeapi.co/api/v2/pokemon/' + randomChoice + '/')
    .then((response) => {
      return response.json()
        .then((pokemon) => {
          console.log(pokemon);
          //set user image tag to the random pokemon's picture
          userImage.setAttribute('src', pokemon.sprites.front_default)
          userPokeName.innerText = `${pokemon.name[0].toUpperCase()}${pokemon.name.slice(1)}`
          userHP.innerText = 50
          attackButton.addEventListener('click', (event) => {
            event.preventDefault()
            ability.innerText = `${pokemon.name[0].toUpperCase()}${pokemon.name.slice(1)} used ${pokemon.abilities[0].ability.name}!
            It was very effective`
          })
      })
  })
  randomChoice = Math.floor(Math.random() * 721) + 1
  fetch('http://pokeapi.co/api/v2/pokemon/' + randomChoice + '/')
    .then((response) => {
      return response.json()
        .then((pokemon) => {
          console.log(pokemon);
          //set computer image tag to the random pokemon's picture
          compImage.setAttribute('src', pokemon.sprites.front_default)
          compPokeName.innerText = `${pokemon.name[0].toUpperCase()}${pokemon.name.slice(1)}`
          compHP.innerText = 50
      })
  })
})
form.addEventListener('submit', (event) => {
  event.preventDefault()
  //get data from user
  var userChoice = event.target.elements['poke-name'].value.toLowerCase()
  //get a random pokemon
  var randomChoice = Math.floor(Math.random() * 721) + 1
  //using user input, get specific pokemon data from api
  fetch('http://pokeapi.co/api/v2/pokemon/' + userChoice + '/')
    .then((response) => {
      return response.json()
        .then((pokemon) => {
          console.log(pokemon);
          //set user image tag to current pokemon picture
          userImage.setAttribute('src', pokemon.sprites.front_default)
          userPokeName.innerText = `${pokemon.name[0].toUpperCase()}${pokemon.name.slice(1)}`
          userHP.innerText = 50
          attackButton.addEventListener('click', (event) => {
            event.preventDefault()
            ability.innerText = `${pokemon.name[0].toUpperCase()}${pokemon.name.slice(1)} used ${pokemon.abilities[0].ability.name}!
            It was very effective`
          })
      })
  })
  //generate random pokemon for computer
  //using random pokemon, get specific pokemon data from api
  fetch('http://pokeapi.co/api/v2/pokemon/' + randomChoice + '/')
    .then((response) => {
      return response.json()
        .then((pokemon) => {
          console.log(pokemon);
          //set computer image tag to the random pokemon's picture
          compImage.setAttribute('src', pokemon.sprites.front_default)
          compPokeName.innerText = `${pokemon.name[0].toUpperCase()}${pokemon.name.slice(1)}`
          compHP.innerText = 50
      })
  })
})
