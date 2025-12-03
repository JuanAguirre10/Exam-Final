const Card = ({ item }) => {
  return (
    <div className="col">
      <div className="card h-100">
        <img 
          src={item.flags?.png || 'https://via.placeholder.com/300'} 
          className="card-img-top" 
          alt={item.name?.common || 'Country flag'}
          style={{height: '200px', objectFit: 'cover'}}
        />
        <div className="card-body">
          <h5 className="card-title">{item.name?.common || 'Unknown'}</h5>
          <p className="card-text mb-1">
            <strong>🏛️ Capital:</strong> {item.capital?.[0] || 'N/A'}
          </p>
          <p className="card-text mb-1">
            <strong>🌎 Region:</strong> {item.region || 'N/A'}
          </p>
          <p className="card-text mb-0">
            <strong>👥 Population:</strong> {item.population?.toLocaleString() || 'N/A'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;