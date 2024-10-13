import {React, useState, useEffect}  from "react";
import logements from "../Datas/logements.json";
import '../styles/card.scss'

function Card() {
    const [items, setItems] = useState([]);

    useEffect(() => {
    setItems(logements);
    }, []);

    return (
    <div className="card-container">
        {items.map((item) => (
            <div className="card-item" key={item.id}>
                <img className="card_cover" src={item.cover} alt="cover"/>
                <h2 className="card_title">{item.title}</h2>
            </div>
        ))}
    </div>
    );
}

export default Card