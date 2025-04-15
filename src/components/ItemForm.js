import { useState } from "react";

function ItemForm({ onItemFormSubmit }) {
  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("Produce"); // default value

  function handleSubmit(e) {
    e.preventDefault(); // prevent page reload

    const newItem = {
      id: uuid(), // make sure uuid is imported
      name: itemName,
      category: itemCategory,
    };

    onItemFormSubmit(newItem); // lift new item up
    setItemName(""); // reset input fields after submit
    setItemCategory("Produce");
  }

  return (
    <form className="ItemForm" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
      </label>
      <label>
        Category:
        <select
          value={itemCategory}
          onChange={(e) => setItemCategory(e.target.value)}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>
      <button type="submit">Add to List</button>
    </form>
  );
}

