import { useState,useEffect } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { MENU_API } from '../utils/constants';

const RestaurantMenu = () =>{
    const [resInfo, setResInfo] = useState(null);
    useEffect(()=>{
        fetchMenu();
    },[]);
    const {resId} = useParams();
    
    async function fetchMenu () {
        
        const data = await fetch(MENU_API+resId);

        const json = await data.json();
        setResInfo(json);
        console.log(json);
    }

    

    if(resInfo === null){
        return <Shimmer/>;
    }
    const {name, cuisines, costForTwoMessage} = resInfo?.data?.cards[0]?.card?.card?.info;
    const {itemCards} = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    return (
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(', ')} - {costForTwoMessage}</h3>
            <h2>Menu</h2>
            <ul>
                {/* <li>{itemCards[0].card.info.name}</li>
                <li>{itemCards.map(item => {
                    item.card.info.name;
                })}</li>
                <li>Diet coke</li> */}
                {itemCards.map(item => 
                    <li key={item.card.info.id}>{item.card.info.name} - Rs. {item.card.info.price/100}</li>
                )}
            </ul>
        </div>
    );
}

export default RestaurantMenu; 