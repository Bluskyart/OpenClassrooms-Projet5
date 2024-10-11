import {React, useState, useEffect}  from "react";
import logements from "../Datas/logements.json";

function Card() {
    const [items, setItems] = useState([]);

    useEffect(() => {
    setItems(logements);
    }, []);

    const deleteItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
    };

    const addItem = () => {
    const newItem = { id: items.length + 1, name: `Item ${items.length + 1}` };
    setItems([...items, newItem]);
    };

    return (
    <div>
        {items.map((item) => (
        <div key={item.id}>
            <div><img src={item.cover} alt="cover"/></div>
            <h2>{item.title}</h2>
            <button onClick={() => deleteItem(item.id)}>Delete</button>
        </div>
        ))}
        <button onClick={addItem}>Add Item</button>
    </div>
    );
}

export default Card