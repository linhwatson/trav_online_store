import { useState } from "react";
import { useQuery } from '@tanstack/react-query';
import ItemsList from "./ItemsList";
import FetchAll from "./FetchAll";

const DropDown = ({ items }) => {
  const categories = ["Dairy", "Meat", "Vegetables", "Fruits"];
  const [category, setCategory] = useState("");

  const results = useQuery(['search'], FetchAll);
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
              onChange={(e) => setCategory(e.target.value)}
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
