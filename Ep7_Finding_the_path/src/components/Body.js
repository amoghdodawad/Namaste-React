import RestaurantCard from './RestaurantCard';
import resList from '../utils/mockData'
import Shimmer from './Shimmer'
import {useState,useEffect} from 'react'
import { Link } from 'react-router-dom';

// const Shimmer = () =>{
//   return (
//   <div className="shimmer-container">
//       <div className="shimmer-card">Card</div>
//       <div className="shimmer-card">Card</div>
//       <div className="shimmer-card">Card</div>
//   </div>
//   );
// }

const Body = () =>{
    console.log('Body');
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [temp, setTemp] = useState([]);
    const [searchText, setSearchText] = useState('');

    useEffect(()=>{
      fetchData();
      console.log('Inside useEffect Body');
    },[]);
    let total;
    const fetchData = async () =>{
      
      const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING');
      const json = await data.json();
      setListOfRestaurant(json?.data?.cards[2]?.data?.data?.cards);
      setTemp(json?.data?.cards[2]?.data?.data?.cards);
      console.log('temp');
      console.log(temp);
    }
    if(listOfRestaurant.length === 0){
      return (
        <Shimmer />
      );
    }

    return (
        <div className='Body'>
            <div className='filter'>
                <div className='search'>
                  <input type='text' className='search-box' value={searchText} onChange={(e)=>{
                    setSearchText(e.target.value);
                  }}></input>
                  <button onClick={()=>{
                    // Filter the cards and update the UI.
                    console.log(searchText);
                    const filteredRes = temp.filter((res)=>res.data.name.toLowerCase().includes(searchText.toLowerCase()));
                    if(filteredRes.length !== 0){
                      setListOfRestaurant(filteredRes);
                    } else {
                      setListOfRestaurant(listOfRestaurant)
                    }
                  }}>Search</button>
                </div>
                <button className='filter-btn' onClick={()=>{const filteredRes = temp.filter((res) => res.data.avgRating > 4);console.log(listOfRestaurant);
                setListOfRestaurant(filteredRes)}}>Top rated restaurant</button>
            </div>
            <div className='res-container'>
                {listOfRestaurant.map((restaurant)=> (
                  <Link key={restaurant.data.id} to={'/restaurants/'+restaurant.data.id}>
                    <RestaurantCard key={restaurant.data.id} resData={restaurant}/>
                  </Link>
                ))}
            </div>
        </div>
    );
}
export default Body;