function DishCard({ dish }) {
return (
  <div className="dish-card">
    <h2>{dish.name}</h2>
    <p className="dish-price">Rs. {dish.price.toFixed(2)}</p>
    <small className="dish-category">{dish.category}</small>
    {!dish.available && <div className="sold-out">Sold out</div>}
  </div>
);
}
export default DishCard;