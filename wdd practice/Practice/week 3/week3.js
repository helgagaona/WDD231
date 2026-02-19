const url = 'https://pokeapi.co/api/v2/pokemon/ditto';
async function getPokemon(url) {
    const results = await fetch(url);
    let data;
    console.log(results);
    if(results.ok) {
        data = await results.json();
        console.log("data:",data);
    }
}
getPokemon(url);


