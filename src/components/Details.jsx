import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import FetchItem from './FetchItem';

const Details = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const result = useQuery(['details', id], FetchItem);

  if (result.isLoading) {
    return (
      <div className='loading-pane'>
        <h2 className='loader'>🦔</h2>
      </div>
    )
  }

  const item = result?.data;

  return (
    <div>
      <h1>{item.product_name}</h1>
      <h2>${item.price}</h2>
      <h3>
        <p>Popularity: {item.popularity}</p>
        <p>Durability: {item.durability}</p>
        <p>Days Until Expiration: {item.daysuntilexpiration}</p>
        <p>Barcode: {item.barcode}</p>
      </h3>
      <button>
        Add to Cart
      </button>
      <button
        onClick={() => navigate('/')}
      >
        Keep Shopping
      </button>
    </div>
  )
};

export default Details;
