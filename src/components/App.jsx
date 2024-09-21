function App() {
    const pokemon = {
      name: "Oshawott",
      id: 501,
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/501.png",
      types: ["Water"],
      weight: 5.9,
      height: 0.5,
      description: "La vieira de su ombligo no solo sirve como arma, sino también como instrumento para cortar las bayas que estén duras.",
      stats: [
        { name: "HP", value: 45 },
        { name: "ATK", value: 49 },
        { name: "DEF", value: 49 },
        { name: "SATK", value: 65 },
        { name: "SDEF", value: 65 },
        { name: "SPD", value: 45 },
      ],
    };
  
    return (
      <div className="card">
        <Header name={pokemon.name} id={pokemon.id} />
        <ImageContainer src={pokemon.image} alt={pokemon.name} />
        <PokeInfo
          types={pokemon.types}
          weight={pokemon.weight}
          height={pokemon.height}
          description={pokemon.description}
          stats={pokemon.stats}
        />
      </div>
    );
  }
  
  export default App;
  