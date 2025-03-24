import { useState, useEffect } from "react";
import axios from "axios";
import Items from "./Item.jsx";
import '../css/Body.css';

const Body = () => {
    const [items, setItems] = useState([]);
    const [people, setPeople] = useState([]); 

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const res = await axios.get("https://67c83ca60acf98d0708589e8.mockapi.io/api/data/items");
                const res_people = await axios.get("https://67c83ca60acf98d0708589e8.mockapi.io/api/data/people");
                setItems(res.data);
                setPeople(res_people.data); 
            } catch (e) {
                console.error(e);
            }
        };
        fetchItems();
    }, []);

    return (
        <>
            <div className="body">
                {people.length > 0 && ( // Kiểm tra people trước khi hiển thị
                    <div className="info-container">
                        <h1 className="info-name">{people[0].name}</h1>
                        <div className="avatar">
                        <img src={people[0].avatar} alt="avatar" />
                        </div>
                        <p className="info-des">{people[0].description}</p>
                        <button className="info-share">{people[0].share}</button>
                        <p className="info-like">{people[0].like}</p>
                    </div>
                )}
                <ul>
                    <li>Saved Recipes</li>
                    <li>Folders</li>
                    <li>Recipes by Genevieve</li>
                </ul>
                <div className="line"></div>
                <Items items={items} />
            </div>
        </>
    );
}

export default Body;
