const [items, setItems] = useState(initialItems); // assume initialItems is defined

function handleItemFormSubmit(newItem) {
  setItems([...items, newItem]); // add new item to the list
}

