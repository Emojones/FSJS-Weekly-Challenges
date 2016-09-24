function addPokemon(name) {
    $(`
        <li class="poke-card">
            <h3 class="name">${name}</h3>
        </li>
    `).appendTo('#pokemon');
};

var pokedex = "http://pokeapi.co/api/v2/pokemon/";
 var pokeName = [];
// 1.)  Use the PokéAPI from http://pokeapi.co along with jQuery's getJSON function to retrieve the first 20 Pokémon.
$.getJSON(pokedex, function(data){
  console.log(data);
  });
// 1.1)  Use the addPokemon function to show each of the Pokémon names that were retrieved.  
//Hint: Learn how to access resources via the documentation http://pokeapi.co/docsv2/#resource-lists

  

// 2.)  Use jQuery to create a click handler for the next and previous buttons.
// 2.1) Use the "next" and "previous" properties of the pokemon resource object to get the next or previous list of Pokémon.
$("#previous").click(function(){
   console.log("prev clicked");
});

$("#next").click(function(){
   console.log("next clicked");
});
// 2.2) When a user clicks next or previous, remove all existing Pokémon from the ul element and add the new list of Pokémon.  
// 2.3) Use jQuery to disable the next/previous buttons if there are no more Pokémon to retrieve in that direction.  
