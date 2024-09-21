function Stats(params){
    return(
      <div className="base-stats">
      <h4 className="base-stats-title" >Base Stats</h4>

      <div className="stat">
        <span className="stat-info">HP</span>
        <span className="stat-percentage">45</span>
        <div className="stat-bar" >
          <div className="stat-fill" style={{width: '45%'}}></div>
        </div>
      </div>

      <div className="stat">
        <span className="stat-info">ATK</span>
        <span className="stat-percentage">49</span>
        <div className="stat-bar">
          <div className="stat-fill"  style={{width: '49%'}}></div>
        </div>
      </div>

      <div className="stat">
        <span className="stat-info">DEF</span>
        <span className="stat-percentage">49</span>
        <div className="stat-bar">
          <div className="stat-fill"  style={{width: '49%'}}></div>
        </div>
      </div>

      <div className="stat">
        <span className="stat-info">SATK</span>
        <span className="stat-percentage">65</span>
        <div className="stat-bar">
          <div className="stat-fill"  style={{width: '65%'}}></div>
        </div>
      </div>

      <div className="stat">
        <span className="stat-info">SDEF</span>
        <span className="stat-percentage">65</span>
        <div className="stat-bar">
          <div className="stat-fill"  style={{width: '65%'}}></div>
        </div>
      </div>

      <div className="stat">
        <span className="stat-info">SPD</span>
        <span className="stat-percentage">45</span>
        <div className="stat-bar">
          <div className="stat-fill"  style={{width: '65%'}}></div>
        </div>
      </div>
    </div>
    )
}
export default Stats;