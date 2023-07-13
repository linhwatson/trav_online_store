import { useState } from "react";
import ItemsList from "./ItemsList";
import mockData from '../../data/mockData.json';

const DropDown = () => {
  const categories = ["Dairy", "Meat", "Vegetables", "Fruits"];
  const [category, setCategory] = useState("");

  // using dummy data
  const [items, setItems] = useState(mockData);

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
