function TypesContainer({ types }) {
    return (
      <div className="types-container">
        {types.map((type, index) => (
          <div key={index} className={`type ${type.toLowerCase()}`}>{type}</div>
        ))}
      </div>
    );
  }
  