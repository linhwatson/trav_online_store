import { useState } from "react";
import ItemsList from "./ItemsList";

const DropDown = () => {
  const categories = ["Dairy", "Meat", "Vegetables", "Fruits"];
  const [category, setCategory] = useState("");
  const [items, setItems] = useState([]);

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
      <ItemsList />
    </section>
  );
};

export default DropDown;
