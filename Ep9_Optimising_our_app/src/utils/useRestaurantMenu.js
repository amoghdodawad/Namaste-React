import { MENU_API } from './constants';
import { useEffect, useState } from 'react';

const useRestaurantMenu = (resId) => {

    const [ resInfo, setResInfo] = useState({})
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData = async () =>{
        const data = await fetch(MENU_API+resId);
        const json = await data.json();
        console.log(json.data);
        setResInfo(json.data);
    }
    console.log(resInfo);
    return resInfo;
}

export default useRestaurantMenu;