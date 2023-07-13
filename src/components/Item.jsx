import { Link } from 'react-router-dom';

const Item = ( {unit_id, product_name, price, popularity, durability, daysuntilexpiration, barcode }) => {

  const img = '';

  return (
    <Link to={`/details/${id}`} className='item'>
      <div className='image-container'>
        <img src={img} alt={name}/>
      </div>
      <div className='info'>
        <h1>{product_name}</h1>
        <h2>${price} - Popularity: {popularity}</h2>
      </div>
    </Link>
  )
};

export default Item;