function PokeInfo({ types, weight, height, description, stats }) {
    return (
      <div className="poke-info">
        <TypesContainer types={types} />
        <BasicsInfo weight={weight} height={height} />
        <Description text={description} />
        <BaseStats stats={stats} />
      </div>
    );
  }
  