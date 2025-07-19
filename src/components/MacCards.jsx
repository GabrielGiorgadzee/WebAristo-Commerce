const MacCards = ({ price, title, description, src, quantity = 5 }) => {
  return (
    <div className="card col" style={{ width: "18rem" }}>
      <img src={src} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">Price: {price}₾</p>
        <p className="card-text">Quantity: {quantity}</p>
        <button className="btn btn-success">Buy</button>
      </div>
    </div>
  );
};

export default MacCards;
