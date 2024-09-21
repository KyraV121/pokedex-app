function BaseStats({ stats }) {
    return (
      <div className="base-stats">
        <h4 className="base-stats-title">Base Stats</h4>
        {stats.map((stat, index) => (
          <Stat key={index} name={stat.name} value={stat.value} />
        ))}
      </div>
    );
  }
  