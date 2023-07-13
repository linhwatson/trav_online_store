import { useState } from "react";
import { useQuery } from '@tanstack/react-query';
import ItemsList from "./ItemsList";
import FetchAll from "./FetchAll";

const DropDown = () => {
  const categories = ['pepsi', 'yogurt', 'cheese', 'salad', 'fish', 'beef'];

  const [category, setCategory] = useState("");
  // const [categories, setCategories] = useState([]);

  const results = useQuery(['all', category], FetchAll);
  const items = results?.data ?? [];
  console.log('my results: ', results);

  return (
    <section>
      <div className="dropdown-content">
        <form>
          <label htmlFor="category">
            Category
            <select
              id="dropdown"
              value={category}
              onChange={(e) => {
                e.preventDefault();
                setCategory(e.target.value)
              }}
            >
              {categories.map((category) => (
                <option key={category}>
                  {category}
                </option>
              ))}
            </select>
          </label>
        </form>
      </div>
      <ItemsList items={items}/>
    </section>
  );
};

export default DropDown;
