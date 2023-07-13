import Item from "./Item";

const ItemsList = ({ items }) => {
  return (
    <div>
      {!items.length ? (
        <h1>No Food Items Found!</h1>
      ) : (
        items.map((item) => (
          <Item
            key={item.unit_id}
            unit_id={item.unit_id}
            product_name={item.product_name}
            price={item.price}
            popularity={item.popularity}
            durability={item.durability}
            daysuntilexpiration={item.daysuntilexpiration}
            barcode={item.barcode}
          />
        ))
      )}
    </div>
  )
};

export default ItemsList;
