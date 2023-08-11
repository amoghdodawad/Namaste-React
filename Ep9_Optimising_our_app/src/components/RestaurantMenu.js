import { useState,useEffect } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { MENU_API } from '../utils/constants';
import useRestaurantMenu from '../utils/useRestaurantMenu';

const RestaurantMenu = () =>{
    const [resInfo, setResInfo] = useState(null);
    const {resId} = useParams();
    // setResInfo(useRestaurantMenu(resId));
    let data = null;
    data = useRestaurantMenu(resId);
    console.log(data);


    if(data === null){
        return <Shimmer/>;
    }
    // const {name, cuisines, costForTwoMessage} = data?.data?.cards[0]?.card?.card?.info;
    // const {itemCards} = data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    const { itemCards } = data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.cards;

    const t = 2;
    console.log(itemCards);
    return (
        <div className="menu">
            <h1>{/*name*/}</h1>
            <h3>{/*cuisines.join(', ')*/} - {/*costForTwoMessage*/}</h3>
            <h2>Menu</h2>
            <ul>
                {/* <li>{itemCards[0].card.info.name}</li>
                <li>{itemCards.map(item => {
                    item.card.info.name;
                })}</li>
            <li>Diet coke</li>*/ }
                {/*itemCards.map(item => 
                    <li key={item.card.info.id}>{item.card.info.name} - Rs. {item.card.info.price/100}</li>
                )*/}
            </ul>
        </div>
    );
}

export default RestaurantMenu; 